import { fileStatus } from "./sevices.js";

/**
 * Function to fetch and display file statistics.
 * @param {string} path - Path to the file.
 */
const useFileStats = async (path) => {
   // Await the file status from the service
   const stats = await fileStatus(path);

   // Log various statistics about the file
   console.log("File Size:", stats.size, "bytes");
   console.log("Is it a File?", stats.isFile());
   console.log("Is it a Directory?", stats.isDirectory());
}

// Call the function for 'sevices.js'
useFileStats("./sevices.js")
