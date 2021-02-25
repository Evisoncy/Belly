import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HeaderContactComponent } from './contact/header-contact/header-contact.component';
import { ContentContactComponent } from './contact/content-contact/content-contact.component';



@NgModule({
  declarations: [ContactComponent, HeaderContactComponent, ContentContactComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    
  ]
})
export class ContactusModule { }
