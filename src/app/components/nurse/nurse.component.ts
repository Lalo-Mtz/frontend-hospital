import { Component, OnInit } from '@angular/core';

// Our procces
import { NurseService } from '../../services/nurse.service';
import { PatientService } from '../../services/patient.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  me = {};
  idp = 1;

  constructor(
    private nurseService: NurseService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.nurseService.getInfo()
      .subscribe(
        res => {
          this.me = res;
        },
        err => {console.log(err)}
      );
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

}
