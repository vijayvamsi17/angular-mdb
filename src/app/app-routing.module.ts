import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path:"login",
       component:LoginComponent
    },{
      path:"home",
      component:HomeComponent,
      loadChildren: './forms/forms.module#FormsModule'
    },{
      path:"",
      redirectTo:"login",
      pathMatch:"full"
    },{
      path:"**",
      component:LoginComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
