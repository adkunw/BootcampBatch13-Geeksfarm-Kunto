/**
 * ====================================================
 * Contact Management Utility Functions (Async Version)
 * ====================================================
 *
 * This module provides essential functions for handling user
 * input and storing contact information in a JSON file.
 *
 * Functionality:
 * 1. **Directory & File Setup:**
 *    - Ensures a `data` directory exists for storing contacts.
 *    - Creates `contacts.json` if it doesn't exist and initializes it with an empty array.
 * 2. **User Input Handling:**
 *    - `question()`: Prompts the user for input asynchronously and returns a Promise.
 * 3. **Data Storage:**
 *    - `saveData()`: Reads existing contacts, adds new data, and writes it back to `contacts.json`.
 *    - Uses synchronous file operations for simplicity and reliability.
 * 4. **Graceful Exit:**
 *    - `closeRL()`: Closes the readline interface after user input is completed.
 *
 * This module is designed to be reusable and can be imported into other scripts.
 *
 * Created by: Kunto Geeksfarm
 */

// Import necessary modules: fs for file system, and readline for input
const fs = require("fs"); // 'fs' allows us to interact with the file system (read, write, check files)
const readline = require("readline"); // 'readline' lets us interact with the user through the terminal/console

// Create a readline interface to handle user input from the command line
const rl = readline.createInterface({
  input: process.stdin, // Defines where the input is coming from: standard input (user typing in terminal)
  output: process.stdout, // Defines where the output will be shown: standard output (console)
});

// Define the directory path where we want to store user data
const dirPath = "./data"; // Path to the directory where we want to store the user contact data

// Define the path for the contacts file by combining the directory path and file name
const dataPath = `${dirPath}/contacts.json`; // The contacts file will be inside the ./data directory

// Check if the "data" directory exists, if not, create it
if (!fs.existsSync(dirPath)) {
  // fs.existsSync() checks if the directory already exists
  fs.mkdirSync(dirPath); // fs.mkdirSync() creates a new directory if it does not exist
}

// Check if the contacts file exists, if not, create an empty JSON file to store data
if (!fs.existsSync(dataPath)) {
  // If the contacts.json file doesn't exist
  fs.writeFileSync(dataPath, "[]", "utf-8"); // Create an empty JSON array "[]" and write it to the file
}

// Function to prompt the user with a question and return their answer as a Promise
const question = async (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      // rl.question() prompts the user with the question
      resolve(answer); // Resolves the Promise with the user's answer
    });
  });
};

// Function to save the contact data to the JSON file
const saveData = (data) => {
  try {
    // Read the contents of the file (contacts.json)
    const file = fs.readFileSync(dataPath, "utf-8");
    // Parse the file content (JSON) into a JavaScript array or object
    const contacts = JSON.parse(file);
    // Add the new contact data (name, phone, email) to the contacts array
    contacts.push(data);
    // Write the updated array back to the file in JSON format
    fs.writeFileSync(dataPath, JSON.stringify(contacts));

    // If everything goes well, inform the user that the data was saved successfully
    console.log("Data saved successfully.");
  } catch (error) {
    // If there is any error during reading or writing the file, show an error message
    console.error("Error saving data:", error.message);
  }
};

const closeRL = () => {
  rl.close();
};

module.exports = { question, saveData, closeRL }; // Export the 'question' and 'saveData' functions for use in other files
