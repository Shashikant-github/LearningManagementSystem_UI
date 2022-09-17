import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {bookingEmail1: string = '';
 bookingEmail: string = '';
 public book?: Booking[];

  constructor(
    private bookService: BookingService,
    private alerts: ToastrService
  ) { 
  }
  ngOnInit(): void {}
  historyByEmail(bookingEmail:string) {
    this.bookingEmail1=bookingEmail;
    console.log(bookingEmail);
    this.bookService.historyByEmail(bookingEmail).subscribe((res) => {
      console.log(res);
      if (res != null) {
        this.book = res;
      } else {
        alert(`Email=${bookingEmail} Not Found.`);
      }
    });
  }
  cancelBooking(cancelPNR: string = '') {
    console.log(`Pnr ${cancelPNR}`);
    console.log(this.bookingEmail1);
    if (confirm(`Please click OK to cancel the Ticket with PNR:${cancelPNR}.`)) {
      this.bookService.cancelByPNR(cancelPNR).subscribe((res) => {
        // console.log(res);
        //console.log(res.bookingDate);
        // this.book.bookingDate=res.bookingDate;
        if (res != null) {
          this.alerts.success('Ticket Cancelled');
          this.historyByEmail(this.bookingEmail1);
          
        } else {
          alert(
            "Ticket can't be cancelled within 24 hrs of Journey!"
          );
        }
      });
    } 
    else {
      this.historyByEmail(this.bookingEmail1);
    }
  }
}
