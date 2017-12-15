import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {  MatCheckboxModule,MatFormFieldModule,MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashabordComponent } from './components/dashabord/dashabord.component';
import { HeadersComponent } from './components/headers/headers.component';
import { routing } from './app.routes';
 
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashabordComponent,
    HeadersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
     HttpModule,
     routing,
     MatFormFieldModule,
     MatCheckboxModule,
     MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
