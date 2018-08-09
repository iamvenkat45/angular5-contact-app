import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id;
  userDetails;
  constructor(private route: ActivatedRoute,
  private contactService: ContactService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.userid;
    this.userDetails = this.contactService.getContactById(this.id);
    console.log(this.userDetails);
  }

}
