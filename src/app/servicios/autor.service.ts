import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiKr } from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  //private apiUrl = 'http://api.kyclopsradio.com/selectAutor';
  constructor(
   private http : HttpClient,

  ) { }

autor(json:any): Observable<any> {
  const url = ApiKr;
  console.log('object :>> ', url + json);
  return this.http.post<any>(url,json);
}


}
