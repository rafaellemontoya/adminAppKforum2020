import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tokens } from '../interface/tokens.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  enviarNotificacion(asistente: Tokens) {

    return this.http.post('https://www.kforum2020.com/backend/apps/send_notification.php', asistente);
  }
}
