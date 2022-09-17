import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
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
      this.toaster.success('Course Added');
      alert(`Course Added Name: ${this.courseObj.courseName}, Technology: ${this.courseObj.technology}`);
      this.courseObj.courseCode="";
      this.courseObj.courseName="";
      this.courseObj.courseDescription="";
      this.courseObj.courseDuration="";
      this.courseObj.courseEndDate="";
      this.courseObj.courseLaunchURL="";
      this.courseObj.courseStartDate="";
      this.courseObj.technology="";
      this.ngOnInit();
    });
  }
}
