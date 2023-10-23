import { Injectable } from '@angular/core';
import { ApiZeno } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerDatosEnTiempoReal(): Observable<any> {
    const url = ApiZeno;

    return new Observable((observer) => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event: MessageEvent) => {
        const eventData = JSON.parse(event.data);
        observer.next(eventData);
      };

      eventSource.onerror = (error) => {
        observer.error(error);
      };

      eventSource.onopen = () => {
        //console.log('Conexión abierta');
      };

          return () => {
        eventSource.close();
      };
    });
  }


}
