import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { StaffComponent } from './components/staff/staff.component';
import { SignupComponent } from './components/signup/signup.component';

import { SigninDoctorComponent } from './components/signin-doctor/signin-doctor.component';
import { SigninNurseComponent } from './components/signin-nurse/signin-nurse.component';
import { SigninStaffComponent } from './components/signin-staff/signin-staff.component';
import { EditdocComponent } from './components/editdoc/editdoc.component';
import { ShowpatComponent } from './components/showpat/showpat.component';

import { AuthGuard } from './guard/auth.guard';
import { NurseGuard } from './guard/nurse.guard';
import { StaffGuard } from './guard/staff.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard] },
  { path: 'nurse', component: NurseComponent, canActivate: [NurseGuard] },
  { path: 'staff', component: StaffComponent, canActivate: [StaffGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin-doctor', component: SigninDoctorComponent },
  { path: 'signin-nurse', component: SigninNurseComponent },
  { path: 'signin-staff', component: SigninStaffComponent },
  { path: 'editdoc', component: EditdocComponent, canActivate: [AuthGuard] },
  { path: 'showpat' , component:ShowpatComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
