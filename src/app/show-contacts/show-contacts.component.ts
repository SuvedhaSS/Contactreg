import { ContactClass } from './../contact-class';
import { APIconnectserviceService } from './../apiconnectservice.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.scss'],
})
export class ShowContactsComponent implements OnInit {
  updatedContactList = Array<ContactClass>();
  currentContact: ContactClass = new ContactClass();

  @Output()
  EditContact = new EventEmitter();
  @Output()
  RemoveContact = new EventEmitter();

  constructor(public _appService: APIconnectserviceService) {

    this._appService.GetContactList();
  }

  ngOnInit(): void {
    this._appService.contactListUpdated.subscribe((value) => {
      this.updatedContactList = this._appService.contactList;
    });
  }

  editItem(id: number) {
    this.currentContact = this.updatedContactList.filter((e) => e.Id == id)[0];
this.EditContact.emit(this.currentContact.Id.toString())
  }
  removeItem(id: number) {
    this.currentContact = this.updatedContactList.filter((e) => e.Id == id)[0];
    this.RemoveContact.emit(this.currentContact.Id.toString())
  }
}
