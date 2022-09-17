import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import  jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
bookTicket:Booking;
PNR?:string;
airlineItem?:string;
param1:string="Airway"
param2:string="Airway";
param3:string="Airway"
param4:string="Airway";

book:Booking;
 isShown: boolean = false ;
 isShownForm:boolean=true;


 @ViewChild('content') content?:ElementRef;
// @Input() airlineItem;
  constructor(private bookService:BookingService, private route:ActivatedRoute, private routeService:RouteService, private flightService:FlightService,private toaster:ToastrService) {
    this.bookTicket=new Booking();
    this.route.queryParams.subscribe(params=>{
      this.param1=params['airline'];
      this.param2=params['code'];
      this.param3=params['source'];
      this.param4=params['destination'];

    
    })
    this.book=new Booking();
   }
  ngOnInit(): void {
  }
  bookingDetails(bookForm:NgForm){
    this.bookTicket=bookForm.value;
    this.bookTicket.airline=this.param1;
    this.bookTicket.airlineCode=this.param2;
    this.bookTicket.source=this.param3;
    this.bookTicket.destination=this.param4;
    this.bookTicket.mobile=this.bookTicket.mobile?.toString();
    this.bookTicket.dateOfJourney=this.bookTicket.dateOfJourney?.toString();
    console.log(this.bookTicket.source);
    console.log(this.bookTicket.destination);
    // console.log(this.bookTicket.bookingPassengerName);
    // this.airlineItem=this.flightService.passValue();
    //this.bookTicket.dateOfJourney=this.bookTicket.dateOfJourney?.toTimeString();
    this.bookService.bookFlight(this.bookTicket).subscribe(res=>{
      console.log(`Response after Booking:${res.bookingPNR}`);
      this.PNR=res.bookingPNR;
      this.isShownForm=false;
      //alert("Ticket booked Successfully");
      this.toaster.success('Ticket booked Successfully!');
      this.bookService.searchByPNR(this.PNR).subscribe(res=>{
        if (res != null) {
          // bookPNR=new Booking();
           this.book=res;
           this.isShown = true;
           //this.routeService.goToPNR();
         } else {
           this.isShown = false;
           //this.book=res;
           alert(`PNR=${this.PNR} Not Found.`);
         }
      })
    })
    bookForm.resetForm();
  }
     SavePDF(){  
      
    var DATA=this.content?.nativeElement;

    html2canvas(DATA).then(canvas => {
     
     let fileWidth = 208;
     let fileHeight = canvas.height * fileWidth / canvas.width;
     
     const FILEURI = canvas.toDataURL('image/jpeg');
     //canvas.toBlob
     let PDF = new jsPDF('p', 'mm', 'a4');
     let position = 0;
     PDF.addImage(FILEURI, 'jpeg', 0, position, fileWidth, fileHeight);
     PDF.save(`${this.PNR}_Air Ticket.pdf`);
     PDF.output("dataurlnewwindow");
        });
   
      
    }  
  


}
