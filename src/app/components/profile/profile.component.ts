import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userName?:string|null;
  constructor() {
   }

  ngOnInit(): void {
   this.userName= localStorage.getItem('userName');
   console.log(this.userName);
  }

}
