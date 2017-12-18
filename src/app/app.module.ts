import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

 
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashabordComponent } from './components/dashabord/dashabord.component';
import { HeadersComponent } from './components/headers/headers.component';
import { MaterialModule } from './app.material';
import { AppRoutingModule } from './app.routes';
import { SidebarComponent } from './components/sidebar/sidebar.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashabordComponent,
    HeadersComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
     HttpModule,
     AppRoutingModule,
     MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
