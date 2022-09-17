import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css'],
})
export class AddFlightComponent implements OnInit {
  courseObj: Flight;
  flights?: Array<Flight>;
  customExMessage?: string;
  constructor(
    private flightService: FlightService,
    private toaster: ToastrService
  ) {
    this.courseObj = new Flight();
  }
  ngOnInit(): void {
    // this.flightService.getAllFlightsA().subscribe({
    //   next: (res) => {
    //     console.log(`Data from service: ${res}`);
    //     this.flights = res;
    //     console.log(res);
    //   },
    //   error: (e) => {
    //     this.customExMessage = e.message;
    //   },
    // });
  }
  addCourse() {
    console.log(`Added Flight Name :${this.courseObj.courseName}`);
    //this.courseObj. = false;
    //this.courseObj.status = 'Active';
    //this.courseObj.ticketPrice=this.flightObj.ticketPrice?.toString();
   // this.courseObj.courseStartDate = this.courseObj.courseStartDate.toDa
    console.log(this.courseObj);
    //console.log(this.flightObj.status);
    this.flightService.addFlight(this.courseObj).subscribe((res) => {
      this.toaster.success('Flight Added');
      alert(`Flight Added Name: ${this.courseObj.courseName}, Category: ${this.courseObj.technology}, Price: Rs.${this.courseObj.courseDescription }/-`);
      this.ngOnInit();
    });
  }
}
