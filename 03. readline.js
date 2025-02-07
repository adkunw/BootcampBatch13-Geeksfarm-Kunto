/**
 * ==========================================
 * Collecting User Input Using Readline Module
 * ==========================================
 *
 * This script demonstrates how to use the built-in 'readline' module in Node.js
 * to interact with users via the command line. The script will:
 *
 * 1. Import the 'fs' module (not used in this example but can be extended to save input).
 * 2. Import and configure the 'readline' module to read user input.
 * 3. Prompt the user for their name, phone number, and email.
 * 4. Display the collected user input in the console.
 * 5. Close the readline interface to end the process.
 *
 * The program will ask each question sequentially before displaying the final details.
 *
 * Created by: Kunto Geeksfarm
 */

// Import the 'fs' module, which provides an API for interacting with the file system
const fs = require("fs");

// Import the 'readline' module and create an interface for reading data from the standard input (keyboard)
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for their name
rl.question("What is your name? ", (name) => {
  // After getting the name, ask for their phone number
  rl.question("What is your phone number? ", (phone) => {
    // After getting the phone number, ask for their email
    rl.question("What is your email? ", (email) => {
      // Print the collected information to the console
      console.log(`Your name : ${name}`);
      console.log(`Your phone number : ${phone}`);
      console.log(`Your email : ${email}`);

      // Close the readline interface to end the program
      rl.close();
    });
  });
});

// This code will prompt the user to enter their name, phone number, and email one by one.
// After collecting the information, it will print the details to the console.
