import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetStoreModule } from './pet-store/pet-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
