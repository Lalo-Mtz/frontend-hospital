import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { StaffComponent } from './components/staff/staff.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'signup', component: SignupComponent}
=======
import { DoctorComponent } from './components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { StaffComponent } from './components/staff/staff.component';


const routes: Routes = [
  {path: "doctor",component:DoctorComponent},
  {path: "",component:HomeComponent},
  {path: "nurse",component:NurseComponent},
  {path: "staff",component:StaffComponent},
  
>>>>>>> 185ecae228973e141a1dcd5b36c0f41f1d673fb4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
