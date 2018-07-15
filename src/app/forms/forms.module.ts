import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  declarations: [
    ReactiveFormsComponent,
    FormsComponent]
})
export class FormsModule { }
