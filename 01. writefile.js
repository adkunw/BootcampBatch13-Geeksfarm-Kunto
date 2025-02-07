/**
 * ==========================================
 * File Creation and Writing with Node.js
 * ==========================================
 *
 * This script demonstrates how to use the built-in 'fs' (File System) module in Node.js
 * to create and write content to a file. The script will:
 *
 * 1. Import the 'fs' module.
 * 2. Use 'fs.writeFileSync()' to create a file named 'hello.txt'.
 * 3. Write the text "Hello from Node.js!" into the file.
 * 4. Overwrite the file if it already exists.
 *
 * When executed, this script will generate 'hello.txt' in the same directory as this script.
 * You can open the file to verify its content.
 *
 * Created by: Kunto Geeksfarm
 */

// Import the 'fs' module, which provides an API for interacting with the file system
const fs = require("fs");

// Use the 'writeFileSync' method from the 'fs' module to create a new file named 'hello.txt'
// and write the text "Hello from Node.js!" into it. If the file already exists, it will be overwritten.
fs.writeFileSync("hello.txt", "Hello from Node.js!");

// This code will create a file named 'hello.txt' in the same directory as this script
// and write the specified text into it. You can open 'hello.txt' to see the content.
