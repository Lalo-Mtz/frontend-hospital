import { Injectable, Output, EventEmitter } from '@angular/core';
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

  getDoctorsPatients(id:any){
    return this.http.get<any>(this.URL + '/doctor/' + id);
  }

  setInfo(patient: any) {
    return this.http.post<any>(this.URL, patient);
  }

  getHistory(id:any){
    return this.http.get<any>(this.URL + '/history/' + id);
  }

  getInfoPrescription(id:any){
    return this.http.get<any>(this.URL + '/prescription/' + id);
  }

  getInfoResults(id:any){
    return this.http.get<any>(this.URL + '/results/' + id);
  }

  addPatient(patient:any){
    return this.http.post<any>(this.URL + '/add', patient);
  }

}
