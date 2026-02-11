import fs from "fs";

/**
 * Synchronous write operation.
 * Blocks the event loop until the file is written.
 */
const writeFileSync = () => {
    try {
        fs.writeFileSync("./example.txt", "This data is written with the help of 'writeFileSync.'");
        console.log("File written synchronously.");
    } catch (error) {
        console.log("Error during synchronous write:", error.message);
    }
}

/**
 * Synchronous read operation.
 * Blocks until the entire file content is read into memory.
 */
const readFileSync = () => {
    try {
        const data = fs.readFileSync("./example.txt", "utf-8");
        console.log("Read Content:", data);
    } catch (error) {
        console.log("Unable to read File synchronously.");
    }
}

/**
 * Synchronous append operation.
 * @param {string} data - Data to add to the end of the file.
 */
const appendFileSync = (data) => {
    try {
        fs.appendFileSync("./example.txt", data);
        console.log("Data appended synchronously.");
    } catch (error) {
        console.log("Error during synchronous append.");
    }
}

// Execution flow for Synchronous methods
console.log("--- START SYNC DEMO ---");

console.log("1. Writing file...");
writeFileSync();

console.log("2. Reading file...");
readFileSync();

console.log("3. Appending to file...");
appendFileSync("\nThis is the appended data through 'appendFileSync()'");

console.log("--- END SYNC DEMO ---");

