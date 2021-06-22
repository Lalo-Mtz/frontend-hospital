import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-resulcon',
  templateUrl: './resulcon.component.html',
  styleUrls: ['./resulcon.component.css']
})
export class ResulconComponent implements OnInit {

  id_con: any;
  info: any = {};
  receta = "";
  resultados = "";
  datetoday = new Date();

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_con = localStorage.getItem('id_con');
    this.consultData()
  }

  consultData() {
    this.doctorService.getDataToConsultation(this.id_con)
      .subscribe(
        res => {
          if (res.success) {
            this.info = res.info;
          }
        },
        err => console.log(err)
      )
  }

  saveReceta() {
    this.doctorService.setReceta(this.receta, this.id_con)
      .subscribe(
        res => {
          if (res.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your prescription has been saved',
              showConfirmButton: false,
              timer: 1800
            })
          }
        }
      )
  }

  saveResultados() {
    this.doctorService.setResultados(this.resultados, this.id_con)
      .subscribe(
        res => {
          if (res.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your results has been saved',
              showConfirmButton: false,
              timer: 1800
            })
          }
        }
      )
  }

  regresa(){
    this.router.navigate(['/doctor']);
  }
}
