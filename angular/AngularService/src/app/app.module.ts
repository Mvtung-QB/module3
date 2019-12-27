import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
