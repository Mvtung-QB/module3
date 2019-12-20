import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEdittorComponent } from './font-size-edittor/font-size-edittor.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChangerColorComponent } from './changer-color/changer-color.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEdittorComponent,
    PetComponent,
    CalculatorComponent,
    ChangerColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
