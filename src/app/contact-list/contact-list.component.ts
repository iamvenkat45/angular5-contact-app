import { Router } from '@angular/router';
import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  usersList;
  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.usersList = this.contactService.getContactList();
  }

  onRowClick(id) {
    this.router.navigate(['/contact-details', id]);
  }

}
