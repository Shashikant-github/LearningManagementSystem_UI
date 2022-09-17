import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights?: Flight[];
  customExMessage?: string;
  constructor(
    private flightService: FlightService,
    private routeService: RouteService
  ) {
    // this.flights=new Array<Flight>();
  }

  ngOnInit(): void {
  //  this.flightService.getAllFlights().subscribe({
  //     next: (res) => {
  //       console.log(`Data from service: ${res}`);
  //       this.flights = res;
  //       console.log(res);
  //     },
  //     error: (e) => {
  //       this.customExMessage = e.message;
  //     }
  //   });
  }
  loginBook(){
    //alert("Please login to proceed further for Booking");
    this.routeService.goToLogin();
    // this.routeService.goToLogin();
  }
  

}