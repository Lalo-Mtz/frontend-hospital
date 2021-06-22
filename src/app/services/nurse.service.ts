import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private URL = 'http:///localhost:3000/nurse';

  constructor(
    private http: HttpClient
  ) { }

  getInfo(){
    return this.http.get<any>(this.URL);
  }

  newConsultation(infoPat:any){
    return this.http.post<any>(this.URL + '/newconsultation', infoPat);
  }

  addvitalsigns(id_con:any, vitalsings:any){
    return this.http.post<any>(this.URL + '/addvitalsigns/' + id_con, vitalsings);
  }

  joinWhitDoctor(){
    return this.http.get<any>(this.URL + '/joindoctor')
  }
}
