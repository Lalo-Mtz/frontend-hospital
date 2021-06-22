import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { StaffComponent } from './components/staff/staff.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninDoctorComponent } from './components/signin-doctor/signin-doctor.component';
import { SigninNurseComponent } from './components/signin-nurse/signin-nurse.component';
import { SigninStaffComponent } from './components/signin-staff/signin-staff.component';


import { AuthGuard } from './guard/auth.guard';
import { NurseGuard } from './guard/nurse.guard';
import { StaffGuard } from './guard/staff.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { EditdocComponent } from './components/editdoc/editdoc.component';
import { ShowpatComponent } from './components/showpat/showpat.component';
import { ResulconComponent } from './components/resulcon/resulcon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorComponent,
    NurseComponent,
    StaffComponent,
    SignupComponent,
    SigninDoctorComponent,
    SigninNurseComponent,
    SigninStaffComponent,
    EditdocComponent,
    ShowpatComponent,
    ResulconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    NurseGuard,
    StaffGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
