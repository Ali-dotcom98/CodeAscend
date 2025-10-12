// utils/boilerplates.js

export const boilerplates = {
    "C++": `#include <iostream>
using namespace std;

int main() {
    
    return 0;
}`,

    "Python": `# Your code here`,

    "Java": (detail) => {

        const inputType = detail.defaultBoilercode.inputType;  // e.g. "int", "String", "int[]"
        const outputType = detail.defaultBoilercode.outputType; // e.g. "int", "boolean"
        const funcName = detail.functionSignature;

        // Choose scanner code
        let scannerCode;
        if (inputType === 'int') {
            scannerCode = 'int input = sc.nextInt();';
        } else if (inputType === 'String') {
            scannerCode = 'String input = sc.nextLine();';
        } else if (inputType === 'int[]') {
            scannerCode = `
        String line = sc.nextLine().trim();
        line = line.replaceAll("\\\\[", "")
                .replaceAll("\\\\]", "")
                .replaceAll(",", " ");
        String[] parts = line.trim().split("\\\\s+");

        int[] input = new int[parts.length];
        for (int i = 0; i < parts.length; i++) {
            input[i] = Integer.parseInt(parts[i]);
        }`;
        } else if (inputType === 'String[]') {
            scannerCode = `
            int size = sc.nextInt();
            sc.nextLine(); // consume newline
            String[] input = new String[size];
            for (int i = 0; i < size; i++) {
                input[i] = sc.nextLine();
            }`;
        } else {
            scannerCode = `${inputType} input = null; // TODO: handle custom type`;
        }

        // Default return
        const defaultReturn = outputType === 'boolean' ? 'false' : outputType === 'String' ? '""' : '0';

        return `
import java.util.Scanner;
public class Main { 
    public static ${outputType} ${funcName}(${inputType} n) {
        // Write your logic here
        return ${defaultReturn}; // default return
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ${scannerCode}
        System.out.println(${funcName}(input));
        sc.close();
    }
}`;
    },



    "C": `#include <stdio.h>

int main() {
    
    return 0;
}`
};
