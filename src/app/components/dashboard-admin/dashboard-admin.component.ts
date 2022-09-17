import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private routeService:RouteService,private bnIdle: BnNgIdleService) { }

  ngOnInit(): void {

    this.bnIdle.startWatching(1800).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.routeService.goToLogin();
       // console.log('session expired');
        alert("Session expired");
      }
    });

  }
  addAirline(){
    this.routeService.goToAddA();
  }
  updateAirline(){
    this.routeService.goToUpdateA();
  }
  deleteAirline(){
    this.routeService.goToDeleteA();
  }
  addBulkAirline(){
    this.routeService.goToAddBulkA();
  }
  allBooking(){
    this.routeService.goToAllBooking();
  }
}
