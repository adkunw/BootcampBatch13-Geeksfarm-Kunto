const fs = require("fs");
const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
const dataPath = "./data/contacts.json";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const question = async (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const saveData = (data) => {
  const file = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(data);
  fs.writeFileSync(dataPath, JSON.stringify(contacts));
};

const main = async () => {
  const name = await question("What is your name? ");

  let phone;
  while (true) {
    phone = await question("What is your phone number? ");
    if (validator.isMobilePhone(phone, ["id-ID"])) {
      break;
    } else {
      console.log("Invalid phone number. Please try again.");
    }
  }

  let email;
  while (true) {
    email = await question("What is your email? ");
    if (validator.isEmail(email)) {
      break;
    } else {
      console.log("Invalid email. Please try again.");
    }
  }

  const data = { name, phone, email };
  saveData(data);
  rl.close();
};

main();
