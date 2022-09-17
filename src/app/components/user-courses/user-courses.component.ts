import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {

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
}
