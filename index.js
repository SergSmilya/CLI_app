const contacts = require("./db");
const { Command } = require("commander");
const program = new Command();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action, <type>")
  .option("-id, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

invokeAction(program.opts());
