import { Component, OnInit } from '@angular/core';

// Our Process
import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';
import { AuthService }  from '../../services/auth.service';

import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  me = {};
  idp = 1;  //Modific

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.doctorService.getInfo()
      .subscribe(
        res => {
          this.me = res;
        },
        err => {
          console.log('Aqui error', err);
          if(err.error.message == 'Email not verified'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Your email isn't verified yet",
              footer: 'Check it out email'
            });
            this.authService.logout();
          }
        }
      );
    //this.consultPatient();
  }

  consultPatients() {
    this.patientService.getPatients()
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  consultPatient() {
    this.patientService.getPatient(this.idp)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  totable(){
    document.getElementById("Tablero")?.scrollIntoView({behavior:"smooth"});
  }

  todoctorme(){
    document.getElementById("doctorme")?.scrollIntoView({behavior:"smooth"});
  }

  topacientes(){
    document.getElementById("pacientes")?.scrollIntoView({behavior:"smooth"});
  }

  torecetas(){
    document.getElementById("recetas")?.scrollIntoView({behavior:"smooth"});
  }

  tohistorial(){
    document.getElementById("historial")?.scrollIntoView({behavior:"smooth"});
  }




}
