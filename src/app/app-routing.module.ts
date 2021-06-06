import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorComponent } from './components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { StaffComponent } from './components/staff/staff.component';


const routes: Routes = [
  {path: "doctor",component:DoctorComponent},
  {path: "",component:HomeComponent},
  {path: "nurse",component:NurseComponent},
  {path: "staff",component:StaffComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
