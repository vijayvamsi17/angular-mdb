import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CstDirectiveComponent } from './cst-directive/cst-directive.component';
import { CstPipeComponent } from './cst-pipe/cst-pipe.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
      path:"login",
       component:LoginComponent
    },{
      path:"home",
      component:HomeComponent,
      children: [
        { path: "forms", loadChildren: './forms/forms.module#FormsTypeModule' },
        { path: "cstDirective", component: CstDirectiveComponent },
        { path: "cstPipe", component: CstPipeComponent }
      ],
      canActivate: [AuthGuard]
    },{
      path: "cstDirective",
      component: CstDirectiveComponent
    },{
      path: "cstPipe",
      component: CstPipeComponent
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
