import fs from 'fs/promises';

/**
 * Asynchronously writes data to a file using fs/promises.
 * @param {string} path - Target path.
 * @param {string} data - Content to write.
 */
const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("File has been written successfully (async promises)");
    } catch (error) {
        console.log("Error during async writing");
    }
}

/**
 * Asynchronously reads data from a file using fs/promises.
 * @param {string} path - File path.
 */
const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log("Read Content (async promises):", data);
    } catch (error) {
        console.log("Unable to read data asynchronously");
    }
}

/**
 * Asynchronously appends data to a file using fs/promises.
 * @param {string} path - File path.
 * @param {string} data - Content to append.
 */
const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully (async promises)");
    } catch (error) {
        console.log("Unable to append data asynchronously");
    }
}

// Global execution flow
console.log("--- START ASYNC PROMISES DEMO ---");

console.log("1. Starting write...");
writeFile("./example2.txt", "This is the data written through async func:'writeFile()'")
console.log("Write initiated.");

console.log("2. Starting read...");
readFile("./example2.txt");
console.log("Read initiated.");

console.log("3. Starting append...");
appendFile("./example2.txt", "\nThis is the data appended through async function")
console.log("Append initiated.");

console.log("--- ASYNC PROMISES INITIATION COMPLETE ---");
