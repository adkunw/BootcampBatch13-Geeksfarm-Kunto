/**
 * ======================================================
 * Contact Management System Using Node.js (Async Version)
 * ======================================================
 *
 * This script collects user contact details (name, phone, and email)
 * and saves them into a JSON file (`contacts.json`). It utilizes
 * asynchronous operations for better handling of user input.
 *
 * The program follows these steps:
 * 1. Imports required modules:
 *    - `func` for custom functions (handling user input and saving data).
 *    - `validator` for input validation (checking phone number and email formats).
 * 2. Asks the user for their name using an asynchronous prompt.
 * 3. Continuously asks for a valid phone number until the user provides a correct input.
 * 4. Continuously asks for a valid email until the user provides a correct input.
 * 5. Stores the collected data into `contacts.json` in a structured format.
 * 6. Closes the input stream once all data has been collected.
 * 7. Displays a success message upon saving the contact information.
 *
 * Features:
 * - Uses asynchronous input handling for a smoother command-line experience.
 * - Ensures persistent storage of contacts in JSON format.
 * - Implements validation to prevent incorrect data entry.
 * - Uses a separate `func.js` module for better code organization.
 *
 * Created by: Kunto Geeksfarm
 */

// Import necessary modules: func for local modul functions, and validator for validation checks
const func = require("./src/func"); // Import the functions from the 'func.js' file
const validator = require("validator"); // 'validator' helps with validating input like email and phone number formats

// Main function that orchestrates the program flow
const main = async () => {
  // Ask the user for their name using the 'question' function
  const name = await func.question("What is your name? "); // 'await' pauses the code until the user enters their name

  // Ask the user for their phone number and validate the input using a loop
  let phone;
  while (true) {
    // This will repeatedly ask the user for a phone number until it's valid
    phone = await func.question("What is your phone number? "); // Prompt the user for their phone number
    if (validator.isMobilePhone(phone, "any")) {
      // Validate the phone number using validator.isMobilePhone
      break; // If the phone number is valid, exit the loop
    } else {
      console.log("Invalid phone number. Please try again."); // If invalid, prompt the user to try again
    }
  }

  // Ask the user for their email and validate the input using a loop
  let email;
  while (true) {
    // This will repeatedly ask the user for an email until it's valid
    email = await func.question("What is your email? "); // Prompt the user for their email
    if (validator.isEmail(email)) {
      // Validate the email using validator.isEmail
      break; // If the email is valid, exit the loop
    } else {
      console.log("Invalid email. Please try again."); // If invalid, prompt the user to try again
    }
  }

  // Once we have the name, phone, and email, create an object to store the data
  const data = { name, phone, email };

  // Call the saveData function to store the user's contact information
  func.saveData(data); // The data is added to the 'contacts.json' file

  // Close the readline interface, ending the interaction with the user
  func.closeRL(); // rl.close() closes the terminal input/output connection
};

// Call the main function to start the program
main(); // Executes the main function
