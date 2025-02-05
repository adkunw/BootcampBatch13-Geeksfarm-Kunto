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
