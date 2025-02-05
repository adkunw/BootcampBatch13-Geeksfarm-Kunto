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
