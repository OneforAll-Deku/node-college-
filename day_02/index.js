import fs from 'fs';

/**
 * Synchronously writes data to a file.
 * @param {string} path - The file path.
 * @param {string} data - The data to write.
 */
const writeFileSync = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("File Has been created successfully");
    } catch (error) {
        console.log("Some Error occured...");
    }
}

/**
 * Synchronously reads and logs data from a file.
 * @param {string} path - The file path.
 */
const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        console.log(data);
    } catch (error) {
        console.log("Some Error occured...");
    }
}

/**
 * Synchronously appends data to an existing file.
 * @param {string} path - The file path.
 * @param {string} data - The data to append.
 */
const appendFileSync = (path, data) => {
    try {
        fs.appendFileSync(path, data);
        console.log("File Has been appended successfully");
    } catch (error) {
        console.log("Some Error occured...");
    }
}

// Demonstrate Write Operation
console.log("Before write");
writeFileSync("./example.txt", "This is the data written through sync func:'writeFileSync'")
console.log("after write");

// Demonstrate Read Operation
console.log("Before read");
readFileSync("./example.txt");
console.log("after read");

// Demonstrate Append Operation
console.log("Before append");
appendFileSync("./example.txt", "This is the data written through sync function:'appendFileSync'");
console.log("after append");
