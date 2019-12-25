import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
