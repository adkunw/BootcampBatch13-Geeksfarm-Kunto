/**
 * ==========================================
 * Reading a File with Node.js
 * ==========================================
 *
 * This script demonstrates how to use the built-in 'fs' (File System) module in Node.js
 * to read the content of a file asynchronously. The script will:
 *
 * 1. Import the 'fs' module.
 * 2. Use 'fs.readFile()' to read the content of 'hello.txt'.
 * 3. Specify 'utf8' encoding to properly read the file as a string.
 * 4. Handle errors that may occur during the file reading process.
 * 5. Print the content of 'hello.txt' to the console if the file is read successfully.
 *
 * Before running this script, ensure that 'hello.txt' exists in the same directory.
 *
 * Created by: Kunto Geeksfarm
 */

// Import the 'fs' module, which provides an API for interacting with the file system
const fs = require("fs");

// Use the 'readFile' method from the 'fs' module to read the content of the file 'hello.txt'
// The second parameter 'utf8' specifies the encoding format, so the content is read as a string
fs.readFile("hello.txt", "utf8", (err, data) => {
  // If there is an error reading the file, log the error to the console
  if (err) {
    console.error(err);
    return;
  }
  // If the file is read successfully, log the content of the file to the console
  console.log(data);
});

// This code will read the content of the file 'hello.txt' and print it to the console.
// Make sure 'hello.txt' exists in the same directory as this script before running it.
