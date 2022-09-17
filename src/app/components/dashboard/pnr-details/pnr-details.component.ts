import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { RouteService } from 'src/app/services/route.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pnr-details',
  templateUrl: './pnr-details.component.html',
  styleUrls: ['./pnr-details.component.css']
})
export class PnrDetailsComponent implements OnInit {

  
 @ViewChild('content') content?:ElementRef;
bookingPNR: string = '';
 book:Booking;
 isShown: boolean = false ;
  constructor(
    private bookService: BookingService,
    private routeService: RouteService
  ) {
    this.book = new Booking();
  }

  ngOnInit(): void {}

  searchByPNR() {
    // this.PNR=this.booking.bookingPNR.toString();
    console.log(this.bookingPNR);
    this.bookService.searchByPNR(this.bookingPNR).subscribe((res) => {
      // console.log(this.bookingPNR);
      // console.log(res);
      // console.log(res.bookingDate);
      // this.book.bookingDate=res.bookingDate;
      if (res != null) {
       // bookPNR=new Booking();
        this.book=res;
        this.isShown = true;
        //this.routeService.goToPNR();
      } else {
        this.isShown = false;
        //this.book=res;
        alert(`PNR=${this.bookingPNR} Not Found.`);
      }     
    });
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
    PDF.save(`${this.bookingPNR}_Air Ticket.pdf`);
    PDF.output("dataurlnewwindow");
   // doc.output('dataurlnewwindow');
}); 
    
  }  
  
}


