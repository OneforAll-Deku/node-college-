import { readFile, writeFile } from "./readAndWrite.js";

/**
 * Reads and logs data from a file asynchronously.
 * @param {string} path - The file path.
 */
const fileData = async (path) => {
    try {
        const data = await readFile(path);
        console.log("File Content:", data);
    } catch (error) {
        console.log("service is not working...");
    }
}

/**
 * Appends new data to a JSON array in a file.
 * @param {string} path - The file path.
 * @param {Object} data - The new object to add.
 */
const writeData = async (path, data) => {
    // Step 1: Read existing data
    const fileContent = await readFile(path);
    let updatedData = [];

    // Step 2: Handle cases where file might be empty/new
    if (!fileContent) {
        updatedData = [{ id: 1, ...data }];
    } else {
        // Parse old data and append new object with incremented ID
        let oldData = JSON.parse(fileContent);
        updatedData = [...oldData, { id: oldData.length + 1, ...data }];
    };

    // Step 3: Write the updated array back to the file
    const response = await writeFile(path, JSON.stringify(updatedData));
    console.log("Update Status:", response.status);
}

// Example usage: Add a new student record
writeData("./students.json", { name: "B" });
