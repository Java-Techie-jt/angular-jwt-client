import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthRequest } from './security/authRequest';


@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private httpClient: HttpClient) { }


  public generateToken(request) {
    return this.httpClient.post<string>("http://localhost:9191/authenticate", request, {  responseType: 'text' as 'json' });
  }


  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:9191/", {headers, responseType: 'text' as 'json' });
  }
}
