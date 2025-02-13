const yargs = require("yargs");
const fs = require("./src/func");

yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
    phone: {
      describe: "contact phone",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "contact email",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      name: argv.name,
      phone: argv.phone,
      email: argv.email,
    };
    fs.saveData(contact);
  },
});

yargs.command({
  command: "list",
  describe: "view all contacts",
  handler() {
    const contacts = fs.readData();
    if (contacts.length === 0) {
      console.log("No contacts found.");
      return;
    }

    // Modifikasi data untuk menampilkan hanya No, Name, dan Phone
    const contactsToDisplay = contacts.map((contact, index) => ({
      No: index + 1, // Mulai dari 1
      Name: contact.name,
      Phone: contact.phone,
    }));

    // Gunakan console.table dengan menampilkan data yang sudah diformat
    console.log("No   Name         Phone");
    contactsToDisplay.forEach((contact) => {
      console.log(`${contact.No}    ${contact.Name}   ${contact.Phone}`);
    });
  },
});

yargs.command({
  command: "find",
  describe: "find contact by name",
  builder: {
    name: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const nameToSearch = argv.name;
    const contacts = fs.readDataDetail(nameToSearch);

    if (contacts.length === 0) {
      console.log(`No contacts found with name: ${nameToSearch}`);
    } else {
      console.log("Found contacts:");
      console.log("No   Name         Phone");
      console.log("--------------------------");

      contacts.forEach((contact, index) => {
        const formattedIndex = index + 1; // Mulai dari 1
        console.log(`${formattedIndex}    ${contact.name}   ${contact.phone}`);
      });
    }
  },
});

yargs.command({
  command: "delete",
  describe: "delete a contact by name",
  builder: {
    name: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const nameToDelete = argv.name;
    fs.deleteData(nameToDelete); // Memanggil fungsi deleteData untuk menghapus kontak
  },
});

fs.closeRL();
yargs.parse();
