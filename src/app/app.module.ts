import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { DefaultComponent } from './page/home/default/default.component';
import { HeaderComponent } from './page/main-page/header/header.component';
import { FooterComponent } from './page/main-page/footer/footer.component';
import { ContentComponent } from './page/main-page/content/content.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    
   
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
