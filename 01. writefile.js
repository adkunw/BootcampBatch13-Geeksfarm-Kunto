// Import the 'fs' module, which provides an API for interacting with the file system
const fs = require("fs");

// Use the 'writeFileSync' method from the 'fs' module to create a new file named 'hello.txt'
// and write the text "Hello from Node.js!" into it. If the file already exists, it will be overwritten.
fs.writeFileSync("hello.txt", "Hello from Node.js!");

// This code will create a file named 'hello.txt' in the same directory as this script
// and write the specified text into it. You can open 'hello.txt' to see the content.
