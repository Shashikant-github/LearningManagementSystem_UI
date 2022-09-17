import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/booking';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  booking?: Flight;
  courseURL=environment.course_api_url;
  airlineItem?:string;
  
  constructor(private httpClient: HttpClient) {
    this.booking = new Flight();
  }

  bookFlight(bookObj: Booking): Observable<Booking> {
    // return this.httpClient.post<Booking>(
    //   `https://localhost:5021/v1.0/api/FlightApp/Booking/BookTicket
    // `,
    //   bookObj
    // );

    return this.httpClient.post<Booking>(
         this.courseURL+`BookTicket
       `,
         bookObj
      );

  }
  searchByPNR(PNR?: string): Observable<Booking> {
    return this.httpClient.get<Booking>(
      this.courseURL+`GetBookingDetailsByPNR/` +
        PNR
    );
  }
  historyByEmail(bookingEmail: string): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(
      this.courseURL+`History/GetBookingDetailsByEmail/` +
        bookingEmail
    );
  }
  cancelByPNR(bookingPNR: string): Observable<Booking> {
    return this.httpClient.delete<Booking>(
      this.courseURL+`CancelBookingByPNR/` +
        bookingPNR
    );
  }
  //https://localhost:5011/api/v1.0/lms/Courses/GetAllCourses
  allBooking(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(
      this.courseURL+`GetAllCourses`
    );
  }
  deleteCourse(courseCode:string): Observable<boolean> {
    return this.httpClient.delete<boolean>(
      this.courseURL+'DeleteCourse/'+ courseCode
    );
  }
}
