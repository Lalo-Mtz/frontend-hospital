import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { never } from 'rxjs';

@Component({
  selector: 'app-showpat',
  templateUrl: './showpat.component.html',
  styleUrls: ['./showpat.component.css']
})
export class ShowpatComponent implements OnInit {

  dataPatient = { id: 0, name: '', surnames: '', phone: '', sex: '', birthdate: '', age: 0 };
  history = [{ id_con: 0, weight: 0, size: 0, temperatura: 0, blood_pre: '', hearbeat: '', reason: '', create_at: '' }];
  prescription = { id_con: 0, id_doc: 0, list: '', create_at: '' };
  infoDoc = { username: '', type: '', email: '' };
  medicine:any = [];

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patientService.getPatient(localStorage.getItem('idp'))
      .subscribe(
        res => {
          this.dataPatient = res;
          this.getHistory()
        },
        err => console.log(err)
      )
  }

  getHistory() {
    this.patientService.getHistory(this.dataPatient.id)
      .subscribe(
        res => {
          this.history = res.history;
        },
        err => console.log(err)
      )

  }

  topatient() {
    document.getElementById("infopaciente")?.scrollIntoView({ behavior: "smooth" });
  }
  toreceta() {
    document.getElementById("recetas")?.scrollIntoView({ behavior: "smooth" });
  }
  torecetaSelect(i: any) {
    this.patientService.getInfoPrescription(this.history[i].id_con)
      .subscribe(
        res => {
          this.prescription = res.prescription;
          this.infoDoc = res.infoDoc;
          this.medicine = this.prescription.list.split('$');
          console.log(this.medicine)
        },
        err => console.log(err)
      );
    document.getElementById("recetas")?.scrollIntoView({ behavior: "smooth" });
  }
  toeditpat() {
    document.getElementById("Editarinfo")?.scrollIntoView({ behavior: "smooth" });
  }

  toreslab() {
    document.getElementById("reslab")?.scrollIntoView({ behavior: "smooth" });
  }


  cancel() {
    this.router.navigate([`/${localStorage.getItem('user')}`]);
  }
  savePatient() {
    this.patientService.setInfo(this.dataPatient)
      .subscribe(
        res => {
          if (res.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your data has been saved',
              showConfirmButton: false,
              timer: 1800
            })
            // this.router.navigate([`/${localStorage.getItem('user')}`]);
          }
        },
        err => console.log(err)
      )
  }

  confirmHistory() {
    if (this.history.length == 0) return false;
    return true;
  }
}
