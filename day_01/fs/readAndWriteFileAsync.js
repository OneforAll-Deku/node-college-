import fs from "fs";

/**
 * Asynchronous write operation using callbacks.
 * Does not block the main thread.
 * @param {string} data - Data to write.
 * @param {string} path - Target file path.
 */
const writeFile = (data, path) => {
    fs.writeFile(path, data, (error) => {
        if (error) {
            console.error("Error writing file:", error.message);
        } else {
            console.log("File written successfully (async).");
        }
    })
}

/**
 * Asynchronous read operation using callbacks.
 * @param {string} path - File path to read.
 */
const readFile = (path) => {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log("Unable to read File (async).");
        } else {
            console.log("Read Content (async):", data);
        }
    })
}

/**
 * Asynchronous append operation using callbacks.
 * @param {string} data - Data to append.
 * @param {string} path - File path.
 */
const appendFile = (data, path) => {
    fs.appendFile(path, data, (error) => {
        if (error) {
            console.log("Unable to append (async).");
        } else {
            console.log("Data appended successfully (async).");
        }
    })
}

// Global execution flow for asynchronous methods
// Note: These will log "before" and "after" immediately, 
// while the actual operations finish later in the background.

console.log("--- START ASYNC DEMO (Callbacks) ---");

console.log("1. Initiating write...");
writeFile("This is data written by async function:'writeFile()'", "example2.txt");
console.log("Write initiated.");

console.log("2. Initiating read...");
readFile("example2.txt");
console.log("Read initiated.");

console.log("3. Initiating append...");
appendFile("\nAsync appended data", "example2.txt");
console.log("Append initiated.");

console.log("--- ASYNC INITIATION COMPLETE ---");
