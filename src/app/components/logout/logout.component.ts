import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private toast:ToastrService) { }

  ngOnInit(): void {
    this.toast.success("Logged Out!");
    localStorage.clear();
    sessionStorage.clear()
    //localStorage.removeItem('MyToken');
  }

}
