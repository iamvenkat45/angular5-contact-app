import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(contact) {
    this.contactService.addContact(contact);
    this.router.navigate(['contact-list']);
  }

}
