import { Component, OnInit } from '@angular/core';

// Our Process
import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';

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
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.doctorService.getInfo()
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
