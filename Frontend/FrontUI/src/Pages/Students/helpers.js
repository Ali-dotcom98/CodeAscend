export default function escapeDoubleQuotes(inputString) {
  // Check if the input is a string.  Handle null and undefined as well.
  if (typeof inputString !== "string") {
    return ""; // Or you could throw an error:  throw new TypeError("Input must be a string.");
  }

  // Use the replace method with a regular expression to find all double quotes (")
  // and replace them with a backslash followed by a double quote (\").
  const escapedString = inputString.replace(/"/g, '\\"');
  return escapedString;
}
