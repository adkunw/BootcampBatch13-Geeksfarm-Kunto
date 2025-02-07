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
