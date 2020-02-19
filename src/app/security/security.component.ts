import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { AuthRequest } from './authRequest';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: AuthRequest = {
    "userName": "javatechie",
    "password": "password"
  };

  token: string;
  response: string;

  constructor(private service: JwtClientService) { }

  ngOnInit() {
    let resp = this.service.generateToken(this.authRequest);
    resp.subscribe(data =>{
      this.service.welcome(data).subscribe(data => this.response = data)
    } );
    //console.log("Token : "+JSON.stringify(data));
   // this.service.welcome().subscribe(data => this.response = data);
  }

}
