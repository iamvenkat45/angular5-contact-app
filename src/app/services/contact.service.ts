import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  private contactList = [{
    id: '2345',
    firstName: 'venkat',
    lastName: 'sandeep',
    age: 29,
    phone: '98792387987987'
  }];

  // {
  //   id,
  //   firstname,
  //   lastName,
  //   age,
  //   phone
  // }

  constructor() { }

  addContact(contact) {
    contact.id = this.contactList.length.toString();
    this.contactList.push(contact);
  }

  getContactList() {
    return this.contactList;
  }


  getContactById(id) {
    return this.contactList.find((contactItem) => contactItem.id === id);
  }


}
