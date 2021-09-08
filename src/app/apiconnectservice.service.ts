import { environment } from './../environments/environment.prod';
import { ContactClass } from './contact-class';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class APIconnectserviceService {
  public contactList = Array<ContactClass>();
  public contactListUpdated = new Subject<string>();

  private ApiUrl: string;
  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
    this.ApiUrl = environment.apiurl;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  SetcontactListUpdated(isValid: any) {
    this.contactListUpdated.next(isValid);
  }

  GetContactList() {
    this.http.get<any[]>(this.ApiUrl + 'Contact').subscribe((response) => {
      this.contactList = response as Array<ContactClass>;
      this.SetcontactListUpdated(true);
    });
  }

  UpdateContact(newContact: any) {
    return this.http
      .post<any[]>(this.ApiUrl + 'Contact/Create', newContact, this.httpOptions)
      .subscribe((response) => {
        if (response.toString() == 'true' || response.toString() == '1') {
          this.GetContactList();
          if (newContact.Id > 0) {
            this.ShowMessage('Contact updated successfully!', 'X');
          } else {
            this.ShowMessage('Contact saved successfully!', 'X');
          }
        } else {
          this.ShowMessage('Some error occured while saving!', 'X');
        }
      });
  }

  DeleteContact(id: any) {
    let Param = new HttpParams().set('Id', id);
    this.http
      .post<any[]>(this.ApiUrl + 'Contact/Delete?Id=' + id, this.httpOptions)
      .subscribe((response) => {
        if (response.toString() == 'true' || response.toString() == '1') {
          this.GetContactList();
          this.ShowMessage('Contact deleted successfully!', 'X');
        } else {
          this.ShowMessage('Some error occured while deleting!', 'X');
        }
      });
  }

  ShowMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
