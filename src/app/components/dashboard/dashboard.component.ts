import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BnNgIdleService } from 'bn-ng-idle';

import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private bnIdle:BnNgIdleService, private route:RouteService) {}

  ngOnInit(): void {
    
    this.bnIdle.startWatching(1800).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.route.goToLogin();
       // console.log('session expired');
        alert("Session Expired! Please login to continue!");
      }
    });
  }
  
}
