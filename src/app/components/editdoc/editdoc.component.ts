import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../../services/doctor.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editdoc',
  templateUrl: './editdoc.component.html',
  styleUrls: ['./editdoc.component.css']
})
export class EditdocComponent implements OnInit {
  me = { id: '', username: '', email: '', type: '', country: '', college: '', phone: '' };

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.doctorService.getInfo()
      .subscribe(
        res => {
          this.me = res;
        },
        err => console.log(err)
      )
  }


  saveInfo() {
    this.doctorService.setInfo(this.me)
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
            this.router.navigate(['/doctor']);
          }
        },
        err => console.log(err)
      )
  }

  cancel() {
    this.router.navigate(['/doctor']);
  }
}
