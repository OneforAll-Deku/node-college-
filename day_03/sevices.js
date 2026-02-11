import fs from "fs/promises";

/**
 * Asynchronously retrieves the status (stats) of a file or directory.
 * @param {string} path - The path to the file or directory.
 * @returns {Promise<fs.Stats|undefined>} - The stats object or undefined on error.
 */
export const fileStatus = async (path) => {
    try {
        // Use fs.stat to get metadata like size, type, etc.
        const stats = await fs.stat(path);
        return stats;
    } catch (error) {
        console.log("unable to find status for:", path);
    }
}
