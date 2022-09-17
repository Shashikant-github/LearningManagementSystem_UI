import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
 
constructor(private route: Router) {}
  goToHome(){
    this.route.navigate(['home']);
  }
  goToDashboard() {
    this.route.navigate(['dashboard']);
  }
  goToLogin() {
    this.route.navigate(['login']);
  }
  goToLogout(){
    this.route.navigate(['logout']);
  }
  goToRegister() {
    this.route.navigate(['register']);
  }
  goToBooking() {
    this.route.navigate(['bookFlight']);
  }
  goToPNR() {
    this.route.navigate(['dashboard/pnrDetails']);
  }
  goToCancel() {
    this.route.navigate(['dashboard/cancel']);
  }
  goToHistory() {
    this.route.navigate(['dashboard/history']);
  }
  goToAddBulkA() {
    this.route.navigate(['dashboardAdmin/AddBulk']);
  }
  goToDeleteA() {
    this.route.navigate(['dashboardAdmin/delete']);
  }
  goToUpdateA() {
    this.route.navigate(['dashboardAdmin/update']);
  }
  goToAddA() {
    this.route.navigate(['addFlight']);
  }
  goToDashBoardAdmin() {
    this.route.navigate(['dashboardAdmin']);
  }
  goToAdmin() {
    this.route.navigate(['admin']);
  }
  goToUser() {
    this.route.navigate(['user']);
  }
  
  goToAllBooking() {
    this.route.navigate(['allBooking']);
  }
  goToRoot() {
    this.route.navigate(['root']);
  }
  goToHeader() {
    this.route.navigate(['header']);
  }
}
