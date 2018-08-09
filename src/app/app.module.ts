import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactService } from './services/contact.service';

const appRoutes = [{
  path: 'contact-form',
  component: ContactFormComponent,
  pathMatch: 'full'
}, {
  path: 'contact-list',
  component: ContactListComponent
}, {
  path: 'contact-details/:userid',
  component: ContactDetailsComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
