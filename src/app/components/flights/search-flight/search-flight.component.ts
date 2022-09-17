import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  courseRes?:Flight[];
  bookingSource?: string;
  //bookingDestination?: string;
  source?:string;
  dest?:string;
  technology?:string;
  endDate?:string;
  startDate?:string;
  customExMessage?: string;
  noFlight?:string;
  noCourse?:string;
  noTechnology?:string;
  constructor(private flightService: FlightService,
    private routeService: RouteService) { }

  ngOnInit(): void {
  }
  SearchFlights(searchForm:NgForm){
    this.bookingSource=searchForm.value.bookingSource;
    //this.bookingDestination=searchForm.value.bookingDestination;
    this.source=this.bookingSource;
    //this.dest=this.bookingDestination;
    console.log(this.bookingSource);
   // console.log(this.bookingDestination);
    this.flightService.SearchCourse(this.bookingSource?.toUpperCase()).subscribe((res)=>{
      if(res.length!=0){
        this.courseRes=res;
        this.noFlight="";
        console.log(res);
      }
      else{
        //alert(`No Course Found for ${this.source?.toUpperCase()}`);
        this.noFlight=`No Course Found for ${this.source} `;
        console.log(res);
        this.courseRes=undefined;
      }
    });
    searchForm.resetForm();
  }
  
  SearchCourse(searchForm2:NgForm){
    this.technology=searchForm2.value.technology;
    this.noTechnology=this.technology;
    this.startDate = searchForm2.value.startDate;
    this.endDate = searchForm2.value.endDate;
    this.flightService.SearchCourseByDuration(this.technology?.toUpperCase(), this.startDate, this.endDate ).subscribe((res)=>{
      if(res.length!=0){
        this.courseRes=res;
        this.noCourse="";
        console.log(res);
      }
      else{
        //alert(`No Course Found for ${this.source?.toUpperCase()}`);
        this.noCourse=`No Course Found for ${this.noTechnology} `;
        console.log(res);
        this.courseRes=undefined;
      }
    });
    searchForm2.resetForm();
  }
  loginBook(){
    //alert("Please login to proceed further for Booking");
    this.routeService.goToLogin();
    // this.routeService.goToLogin();
  }
}
