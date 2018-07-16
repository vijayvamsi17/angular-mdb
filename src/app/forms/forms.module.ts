import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    ReactiveFormsComponent,
    FormsComponent]
})
export class FormsModule { }
