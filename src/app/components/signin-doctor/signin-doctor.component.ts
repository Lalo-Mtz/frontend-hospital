import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-doctor',
  templateUrl: './signin-doctor.component.html',
  styleUrls: ['./signin-doctor.component.css']
})
export class SigninDoctorComponent implements OnInit {

  doctor={email:"",password:""};

  constructor() { }

  ngOnInit(): void {
  }

  signIn():void{

  }

}

