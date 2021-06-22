import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Our procces
import { NurseService } from '../../services/nurse.service';
import { PatientService } from '../../services/patient.service';


import Swal from 'sweetalert2';
import { SocketwebService } from 'src/app/services/socketweb.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  me = {};
  newPatient = { name: '', surnames: '', phone: '', sex: '', birthdate: '' };
  patients = [{ id: 0, name: '', surnames: '', phone: '', sex: '', birthdate: '' }];
  newConsultation = { name: '', surnames: '', reason: '', urgency: '', weight: '', size: '', temperatura: '', blood_pre: '', hearbeat: '' }

  constructor(
    private nurseService: NurseService,
    private patientService: PatientService,
    private router: Router,
    private socketwebService: SocketwebService
  ) {

  }

  topatient() {
    document.getElementById("pacientes")?.scrollIntoView({ behavior: "smooth" });
  }

  toagregar() {
    document.getElementById("agregarpaciente")?.scrollIntoView({ behavior: "smooth" });
  }

  toagregarconsulta() {
    if (!this.confirmPatients()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Not exist patient yet`
      });
    }
    document.getElementById("agregarconsulta")?.scrollIntoView({ behavior: "smooth" });
  }

  toagregarconsultaId(id: any) {
    this.newConsultation.name = this.patients[id].name;
    this.newConsultation.surnames = this.patients[id].surnames;
    document.getElementById("agregarconsulta")?.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit(): void {
    this.nurseService.getInfo()
      .subscribe(
        res => {
          this.me = res;
          this.getPatients();
        },
        err => { console.log(err) }
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

  clearNewConsultation() {
    this.newConsultation.name = '';
    this.newConsultation.surnames = '';
    this.newConsultation.reason = '';
    this.newConsultation.urgency = '';
    this.newConsultation.weight = '';
    this.newConsultation.size = '';
    this.newConsultation.temperatura = '';
    this.newConsultation.blood_pre = '';
    this.newConsultation.hearbeat = '';
  }

  confirmPatients() {
    if (this.patients.length == 0) return false;
    return true;
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

  enterConsultation() {
    this.verifyDoctors();
    if (!this.isEmplyConsultation()) {
      this.nurseService.newConsultation({
        fullname: `${this.newConsultation.name} ${this.newConsultation.surnames}`,
        reason: this.newConsultation.reason,
        urgency: this.newConsultation.urgency
      })
        .subscribe(
          res => {
            if (res.success) {
              this.saveVitalsings(res.id_con);
            }
          },
          err => this.errorSaveConsultation(err)
        )
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to fill all the fields',
        footer: 'Check that none are missing'
      });
    }
  }

  saveVitalsings(id_con: any) {
    this.nurseService.addvitalsigns(id_con, {
      weight: this.newConsultation.weight,
      size: this.newConsultation.size,
      temperatura: this.newConsultation.temperatura,
      blood_pre: this.newConsultation.blood_pre,
      hearbeat: this.newConsultation.hearbeat
    })
      .subscribe(
        res => {
          if (res.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New consultation has been saved',
              showConfirmButton: false,
              timer: 1800
            });
            this.clearNewConsultation();

            this.sendRequestToDoctor(res.id_con);
          }
        },
        err => {
          this.errorSaveConsultation(err);
        }
      )
  }

  errorSaveConsultation(err: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.error.message}`
    });
    this.clearNewConsultation();
  }

  isEmplyConsultation() {
    return this.newConsultation.name == '' ||
      this.newConsultation.surnames == '' ||
      this.newConsultation.reason == '' ||
      this.newConsultation.urgency == '' ||
      this.newConsultation.weight == '' ||
      this.newConsultation.size == '' ||
      this.newConsultation.temperatura == '' ||
      this.newConsultation.blood_pre == '' ||
      this.newConsultation.hearbeat == '';
  }

  verifyDoctors() {

  }

  sendRequestToDoctor(id_con: any) {
    this.nurseService.joinWhitDoctor(id_con)
      .subscribe(
        res => {
          if(res.success){
            this.socketwebService.emitEvent({ id_con, id_doc: res.id_doc, url: res.url });
            window.location.href = `http://localhost:3500/${res.url}`;
          }
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.error.message}`
          });
        }
      )
  }
}