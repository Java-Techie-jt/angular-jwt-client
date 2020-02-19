import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { JwtClientService } from './jwt-client.service';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JwtClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
