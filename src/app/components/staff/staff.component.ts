import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Our procces
import { PatientService } from '../../services/patient.service';
import { StaffService } from '../../services/staff.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  me = {};
  newPatient = { name: '', surnames: '', phone: '', sex: '', birthdate: '' };
  patients = [{ id: 0, name: '', surnames: '', phone: '', sex: '', birthdate: '' }];

  constructor(
    private patientService: PatientService,
    private staffService: StaffService,
    private router: Router
  ) { }



  topatient() {
    document.getElementById("pacientes")?.scrollIntoView({ behavior: "smooth" });
  }

  toagregar() {
    document.getElementById("agregarpaciente")?.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit(): void {
    this.staffService.getInfo()
      .subscribe(
        res => {
          this.me = res;
          this.getPatients();
        },
        err => console.log(err)
      );
  }

  getPatients() {
    this.patientService.getPatients()
      .subscribe(
        res => {
          this.patients = res;
        },
        err => console.log(err)
      )
  }

  seePatient(id: any) {
    var idp = Number.parseInt(id) + 1;
    localStorage.setItem('idp', idp.toString());
    this.router.navigate(['/showpat']);
  }

  confirmPatients() {
    if (this.patients.length == 0) return false;
    return true;
  }

  savePatient() {
    this.patientService.addPatient(this.newPatient)
      .subscribe(
        res => {
          if (res.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New patient has been saved',
              showConfirmButton: false,
              timer: 1800
            })
            this.clearNewPatient();
            this.getPatients();
          }
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.error.message}`
          });
          this.clearNewPatient();
        }
      )
  }

  clearNewPatient() {
    this.newPatient.name = '';
    this.newPatient.surnames = '';
    this.newPatient.phone = '';
    this.newPatient.sex = '';
    this.newPatient.birthdate = '';
  }

}