import { TestBed } from '@angular/core/testing';
import { Booking } from '../models/booking';

import { BookingService } from './booking.service';

// describe('BookingService SearchbyPNR Test', () => {
//   let service: BookingService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(BookingService);
//   });
  
//   // beforeEach(()=>{
//   //   service=new BookingService();
//   // })

//   it('PNR available', () => {
//     let expected="3140E";
//     let book=new Booking();
     
//     service.searchByPNR(expected).subscribe((res)=>{
//       book=res;
//     });
//     let actualPNR=book.bookingPNR;
//     expect(actualPNR).toBe(expected);
//    // expect(service).toBeTruthy();
//   });
//   it('PNR Not Found', () => {
//     let expected="340E";
//     let book=new Booking();
//     service.searchByPNR(expected).subscribe((res)=>{
//       book=res;
//     });
//     let actualPNR=book.bookingPNR;
//     expect(actualPNR).toEqual(undefined);
//    // expect(service).toBeTruthy();
//   });
// });
