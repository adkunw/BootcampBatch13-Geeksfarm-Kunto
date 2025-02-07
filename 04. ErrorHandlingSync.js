/**
 * ======================================================
 * Contact Management System Using Node.js (Sync Version)
 * ======================================================
 *
 * This script allows users to input their contact details (name, phone, and email)
 * and saves them into a JSON file (`contacts.json`) inside a `data` directory.
 *
 * The program follows these steps:
 * 1. Imports required modules:
 *    - `fs` for file system operations.
 *    - `prompt-sync` for synchronous user input handling.
 *    - `validator` for input validation (phone number and email).
 * 2. Ensures that the `data` directory and `contacts.json` file exist.
 * 3. Uses a function to validate user input for phone numbers and email addresses.
 * 4. Saves the collected data into `contacts.json` in a structured format.
 * 5. Displays a success message upon saving the contact information.
 *
 * Features:
 * - Uses synchronous input handling for a simple command-line experience.
 * - Ensures persistent storage of contacts.
 * - Implements validation to prevent incorrect data entry.
 *
 * Created by: Kunto Geeksfarm
 */

const fs = require("fs");
const prompt = require("prompt-sync")(); // Synchronous user input handling
const validator = require("validator"); // Import validator for validation

const dirPath = "./data";
const dataPath = `${dirPath}/contacts.json`;

// Ensure the directory exists
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Ensure the data file exists
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Function to save data to the contacts file
const saveData = (data) => {
  try {
    const file = fs.readFileSync(dataPath, "utf-8"); // Synchronously read the file content
    const contacts = JSON.parse(file); // Parse the existing file content
    contacts.push(data); // Add the new data to the contacts array
    fs.writeFileSync(dataPath, JSON.stringify(contacts), "utf-8"); // Synchronously write updated data to the file
    console.log("Data saved successfully.");
  } catch (error) {
    console.error("Error saving data:", error.message); // Handle errors
  }
};

// Function to handle user input and validation
const getUserInput = (question, validatorFunction) => {
  let input;
  while (true) {
    input = prompt(question); // Get user input
    if (validatorFunction(input)) {
      return input;
    } else {
      console.log("Invalid input. Please try again.");
    }
  }
};

// Main function to run the program
const main = () => {
  const name = prompt("What is your name? "); // Synchronously prompt the user for their name

  // Get valid phone number using the validation function
  const phone = getUserInput("What is your phone number? ", (input) =>
    validator.isMobilePhone(input, "any")
  );

  // Get valid email using the validation function
  const email = getUserInput("What is your email? ", (input) =>
    validator.isEmail(input)
  );

  const data = { name, phone, email }; // Create a data object from user input
  saveData(data); // Save the data to the file
};

// Run the program
main();
