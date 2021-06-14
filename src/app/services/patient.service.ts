import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private URL = "http://localhost:3000/patient";

  constructor(
    private http: HttpClient
  ) { }

  getPatients(){
    return this.http.get<any>(this.URL + '/');
  }

  getPatient(id:any){
    return this.http.get<any>(this.URL + '/' + id);
  }
}
