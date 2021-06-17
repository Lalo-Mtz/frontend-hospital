import { Component, OnInit } from '@angular/core';

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
  idp = 1;

  constructor(
    private patientService: PatientService,
    private staffService: StaffService 
  ) { }

  ngOnInit(): void {
    this.staffService.getInfo()
      .subscribe(
        res => {
          this.me = res;
        },
        err => console.log(err)
      );
    this.consultPatient();
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