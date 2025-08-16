import axios from 'axios';

// Judge0 API endpoint and headers
const API_URL = 'https://judge0-ce.p.rapidapi.com/submissions';
const API_HEADERS = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': '4ffe7fd1d8msh2dc4bece5f0a33ap11b49cjsne67c45732e3c',
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
};

/**
 * Submits code to Judge0 and returns the result output.
 * @param {string} sourceCode - The source code to run.
 * @param {string} stdin - Input for the code.
 * @param {number} languageId - Language ID as per Judge0.
 * @returns {Promise<string>} The result of code execution.
 */
export const runCode = async (sourceCode, stdin, languageId) => {
  if (!sourceCode.trim()) {
    return 'Please enter some code to run.';
  }

  try {
    // Step 1: Submit the code
    const submissionResponse = await axios.request({
      method: 'POST',
      url: API_URL,
      params: { base64_encoded: 'false', fields: '*' },
      headers: API_HEADERS,
      data: {
        source_code: sourceCode,
        stdin: stdin,
        language_id: languageId,
      },
    });

    const token = submissionResponse.data.token;

    // Step 2: Poll for result
    let result = null;
    let attempts = 0;
    const maxAttempts = 10;

    while (!result || result.status?.id <= 2) {
      if (attempts >= maxAttempts) {
        return 'Execution timed out. The code might be taking too long to run.';
      }

      await new Promise(resolve => setTimeout(resolve, 1000 + attempts * 300));

      const response = await axios.get(`${API_URL}/${token}`, {
        params: { base64_encoded: 'false', fields: '*' },
        headers: API_HEADERS,
      });

      result = response.data;
      attempts++;
    }

    // Step 3: Interpret the result
    if (result.status.id === 3) {
      return result.stdout || 'Program executed successfully (no output).';
    } else if (result.compile_output) {
      return `Compilation Error: ${result.compile_output}`;
    } else if (result.stderr) {
      return `Error: ${result.stderr}`;
    } else {
      return result.status.description || 'An unknown error occurred.';
    }

  } catch (error) {
    console.error('Code execution error:', error);
    return 'Error: Failed to connect to the code execution service.';
  }
};
