import { APIconnectserviceService } from './../apiconnectservice.service';
import { ContactClass } from './../contact-class';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  currentcontact: ContactClass = new ContactClass();
  statusList = [
    { value: true, text: 'Active' },
    { value: false, text: 'Inactive' },
  ];

  constructor(
    private fb: FormBuilder,
    public _appService: APIconnectserviceService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      phoneNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20),
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      status: [''],
    });
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      alert('Please fill valid details!');
      return;
    } else {
      this._appService.SetcontactListUpdated(true);
      this.currentcontact.PhoneNumber =
        this.currentcontact.PhoneNumber.toString();
        this.currentcontact.Status= this.currentcontact.Status==true;
      this._appService.UpdateContact(this.currentcontact);
      //   this.currentcontact=new ContactClass();
      form.reset();
      this.contactForm.reset();
      this.contactForm.clearValidators();
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
    }
  }

  RemoveContact(id: any) {
    this._appService.DeleteContact(id);
    this._appService.contactList.splice(
      this._appService.contactList.findIndex((e) => e.Id == id),
      1
    );
  }
  EditContact(id: any) {
    this.currentcontact = Object.assign(
      {},
      this._appService.contactList.filter((e) => e.Id == id)[0]
    );
  }
}
