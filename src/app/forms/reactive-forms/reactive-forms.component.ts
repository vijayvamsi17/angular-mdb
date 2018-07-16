import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    const address = this.fb.group({
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
    });
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: '',
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.minLength(2), Validators.min(25)]],
      email: ['', [Validators.required, Validators.email]],
      address: address,
      agree: [false, [Validators.requiredTrue]]
    });
  }

  get firstName() { return this.myForm.get('firstName') };

  submitForm() {
    console.log(this.myForm.value);
  }

}
