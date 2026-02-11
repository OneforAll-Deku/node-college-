import fs from "fs/promises";

/**
 * Asynchronously reads the content of a file.
 * @param {string} path - The path to the file.
 * @returns {Promise<string|undefined>} - The content of the file or undefined on error.
 */
export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return data; // Return file content
    } catch (error) {
        console.log("Unable to read file:", path);
    }
}

/**
 * Asynchronously writes data to a file.
 * @param {string} path - The path to the file.
 * @param {string} data - The data to write.
 * @returns {Promise<{status: number, message: string}>} - The operation status and message.
 */
export const writeFile = async (path, data) => {
    let status = 0;
    let message = "";
    try {
        await fs.writeFile(path, data);
        status = 200;
        message = "Data has been written successfully";
    } catch (error) {
        status = 500;
        message = "Unable to write data";
    }
    return { status, message };
}

// readFile("./students.json")
//     .then((data) => console.log(data))

