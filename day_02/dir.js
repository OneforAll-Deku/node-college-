import fs from 'fs/promises';

/**
 * Asynchronously creates a new directory.
 * @param {string} path - The path for the new directory.
 */
const makeDir = async (path) => {
    try {
        await fs.mkdir(path);
        console.log("Directory has been created successfully:", path);
    } catch (error) {
        console.log("Unable to create directory:", path);
    }
}

/**
 * Asynchronously reads the contents of a directory.
 * @param {string} path - The directory path to read.
 */
const readDir = async (path) => {
    try {
        const contents = await fs.readdir(path, "utf-8");
        console.log(`Contents of ${path}:`, contents);
    } catch (error) {
        console.log("Unable to read directory:", path);
    }
}

/**
 * Asynchronously removes a directory.
 * Note: rmdir only works on empty directories in some Node versions.
 * @param {string} path - The directory path to remove.
 */
const removeDir = async (path) => {
    try {
        await fs.rmdir(path);
        console.log("Directory removed successfully:", path);
    } catch (error) {
        console.log("Unable to remove directory:", path);
    }
}

// Example calls
readDir("../day_01");
// Note: removing day_03 and day_04 might be destructive if they are not empty!
// removeDir("../day_03");
// removeDir("../day_04");

