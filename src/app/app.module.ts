import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StructuralDirective } from './shared/directives/structural.directive';
import { AttributesDirective } from './shared/directives/attributes.directive';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CstDirectiveComponent } from './cst-directive/cst-directive.component';
import { CstPipeComponent } from './cst-pipe/cst-pipe.component';
import { CustDateFormatPipe } from './shared/pipes/cust-date-format.pipe';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    StructuralDirective,
    LoginComponent,
    HomeComponent,
    CstDirectiveComponent,
    AttributesDirective,
    CstPipeComponent,
    CustDateFormatPipe
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
