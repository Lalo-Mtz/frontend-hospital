import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private URL = 'http:///localhost:3000/doctor';

  constructor(
    private http: HttpClient
  ) { }

  getInfo() {
    return this.http.get<any>(this.URL);
  }

  getTablero() {
    return this.http.get<any>(this.URL + '/dashboard');
  }

  setInfo(doctor: any) {
    return this.http.post<any>(this.URL, doctor);
  }

  infoPatinetToConsult(id_con: any){
    return this.http.get<any>(this.URL + '/patient/' + id_con);
  }
}
