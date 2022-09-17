import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private routeService:RouteService) { }

  ngOnInit(): void {
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
