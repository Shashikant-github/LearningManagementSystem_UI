import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { RouteService } from './services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBooking';
  constructor(private routerService:RouteService, private bnIdle: BnNgIdleService){}
  ngOnInit(){
     this.routerService.goToHome();
  }
}
