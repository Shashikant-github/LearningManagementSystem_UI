import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Flight } from 'src/app/models/flight';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnInit {
  book?:Flight[];
  customExMessage?: string;
  constructor(private booking:BookingService) { }

  ngOnInit(): void {
    //console.log(this.bookingEmail);
    this.booking.allBooking().subscribe({
      next: (res) => {
        console.log(`Data from service: ${res}`);
        if (res != null) {
           this.book=res;
         } else {
           alert(`Booking Not Found.`);
         }
      },
      error: (e) => {
        this.customExMessage = e.message;
      }
    });
  }
  delete(courseCode:string){
    this.booking.deleteCourse(courseCode).subscribe({
      next: (res) => {
        console.log(`Data from service: ${res}`);
        if (res != null) {
           //this.book=res;
           this.ngOnInit();
         } else {
           alert(`Booking Not Found.`);
         }
      },
      error: (e) => {
        this.customExMessage = e.message;
      }
    });
  }

}
