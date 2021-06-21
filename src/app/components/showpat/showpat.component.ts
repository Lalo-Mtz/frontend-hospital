import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-showpat',
  templateUrl: './showpat.component.html',
  styleUrls: ['./showpat.component.css']
})
export class ShowpatComponent implements OnInit {

  dataPatient = { id: 0, name: '', surnames: '', phone: '', sex: '', birthdate: '' };

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.getPatient(localStorage.getItem('idp'))
    .subscribe(
      res=>{
        console.log(res);
        this.dataPatient = res;
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
  toeditpat() {
    document.getElementById("Editarinfo")?.scrollIntoView({ behavior: "smooth" });
  }
}
