import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsComponent } from './forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    ReactiveFormsComponent,
    FormsComponent,
    TemplateDrivenFormsComponent]
})
export class FormsTypeModule { }
