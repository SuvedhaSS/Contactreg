import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ShowContactsComponent } from './show-contacts/show-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import {HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from  '@angular/forms'
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [AppComponent, ShowContactsComponent, AddContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,ReactiveFormsModule,MatSnackBarModule
  ],
  providers: [  HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
