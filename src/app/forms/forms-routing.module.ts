import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path: "forms",
    component:FormsComponent,
    children:[
    {
      path:"reactive",
      component:ReactiveFormsComponent
    }]
  },{
    path:"",
    redirectTo:"/home/forms/reactive",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
