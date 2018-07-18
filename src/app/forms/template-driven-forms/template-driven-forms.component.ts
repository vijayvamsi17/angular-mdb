import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  userModle = {
    firstName : "Sam",
    middleName: "Kevin",
    lastName: "Adam",
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: ""
    },
    check: true
  }

  constructor() { }

  ngOnInit() {
    
  }

}
