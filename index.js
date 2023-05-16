const contacts = require("./db");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

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

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN" });
// invokeAction({ action: "remove", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Kennedy Lane",
//   email: "nibh@semsempererat.com",
//   phone: "(715) 598-5792",
// });
// invokeAction({ action: "remove", id: "n63k6f_G96c75Jb3Wov0E" });
