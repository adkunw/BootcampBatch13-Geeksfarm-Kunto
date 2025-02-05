const fs = require("fs");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.question("What is your phone number? ", (phone) => {
    rl.question("What is your email? ", (email) => {
      console.log(`Your name : ${name}`);
      console.log(`Your phone number : ${phone}`);
      console.log(`Your email : ${email}`);

      rl.close();
    });
  });
});
