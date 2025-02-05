// Import necessary modules: fs for file system, readline for input, and validator for validation checks
const fs = require("fs"); // 'fs' allows us to interact with the file system (read, write, check files)
const readline = require("readline"); // 'readline' lets us interact with the user through the terminal/console
const validator = require("validator"); // 'validator' helps with validating input like email and phone number formats

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

// Main function that orchestrates the program flow
const main = async () => {
  // Ask the user for their name using the 'question' function
  const name = await question("What is your name? "); // 'await' pauses the code until the user enters their name

  // Ask the user for their phone number and validate the input using a loop
  let phone;
  while (true) {
    // This will repeatedly ask the user for a phone number until it's valid
    phone = await question("What is your phone number? "); // Prompt the user for their phone number
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
    email = await question("What is your email? "); // Prompt the user for their email
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
  saveData(data); // The data is added to the 'contacts.json' file

  // Close the readline interface, ending the interaction with the user
  rl.close(); // rl.close() closes the terminal input/output connection
};

// Call the main function to start the program
main(); // Executes the main function
