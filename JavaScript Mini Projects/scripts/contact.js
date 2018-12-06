class Contact {
    constructor(name, email) {
       this.name = name;
       this.email = email;
    }
 }

 class ContactManager {
    constructor() {
        // when we build the contact manager, it
        // has an empty list of contacts
        this.listOfContacts = [];
    }
    add(contact) {
        this.listOfContacts.push(contact);
    }
    remove(contact) {
        // we iterate on the list of contacts until we find the contact
        // passed as a parameter (we say that they are equal if emails match)
        for(let i = 0; i < this.listOfContacts.length; i++) {
            var c = this.listOfContacts[i];
 
            if(c.email === contact.email) {
                // remove the contact at index i
                this.listOfContacts.splice(i, i);
                // stop/exit the loop
                break;
            }
         };
    }
    empty() {
		this.listOfContacts = [];
	}
    load(){
        if(localStorage.contacts !== undefined){
            this.listOfContacts = JSON.parse(localStorage.contacts);
        }
    }
    save() {
        // We can only save strings in local storage. So, let's convert
        // our array of contacts to JSON
        localStorage.contacts = JSON.stringify(this.listOfContacts);
     }
    printContactsToConsole() {
        this.listOfContacts.forEach(function(c) {
            console.log(c.name);
        });
    };

    static compareName(contact1, contact2){
        if(contact1.name < contact2.name){
            return -1;
        }
        if(contact1.name > contact2.name){
            return 1;
        }
        return 0;
    }

    sort(){
        this.listOfContacts.sort(ContactManager.compareName);
    }
    
    displayContactsAsAtable(id){
        var contact = document.querySelector("#"+id);
        contact.innerHTML = "";

        if(this.listOfContacts.length == 0){
            contact.innerHTML = "<p>No contacts to display</p>";
            return;
        }

        var table = document.createElement('table');
        table.createCaption();
        table.caption.innerHTML = 'Contact Manager';
        
        this.listOfContacts.forEach(function(c){
            var row = table.insertRow();
            var nameCell = row.insertCell();
            nameCell.innerHTML = c.name;
            var emailCell = row.insertCell();
            emailCell.innerHTML = c.email;
        });
        contact.appendChild(table);
    }

}

var contactManager = new ContactManager();;
var displayContact = document.getElementById('displayContacts'); 
contactManager.load();
displayContact.addEventListener('click', displayTable, false);

function displayTable(){
    contactManager.displayContactsAsAtable('contacts');
}

function formSubmitted() {
    // Get the values from input fields
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let newContact = new Contact(name.value, email.value);
    contactManager.add(newContact);
    contactManager.save();
    // Empty the input fields
    name.value = "";
    email.value = "";
    // refresh the table
   displayTable();
    // do not let your browser submit the form using HTTP
    return false;
}