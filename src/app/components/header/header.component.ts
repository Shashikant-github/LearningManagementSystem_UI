import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLogged?:boolean;
isShown: boolean = true ; 
isHide:boolean=true;
isOut:boolean=false;
  constructor(public authService:UserService, private route:RouteService) { }

  ngOnInit(): void {
  this.isHide=true;
  this.isShown=true;
  this.isOut=false;
  }
  toggleShow() {
    this.isOut=true;
    // if(localStorage.getItem('userName')!=null){
    //   console.log(localStorage.getItem('userName'));
    //   this.isShown=false;
    // }
    // else{
    //   this.isShown=true;
    // }
    this.isShown=!this.isShown;
    
    }
    // BackToHome(){
    //   if(confirm("Going Home will logout you! Please confirm.")){
    //     this.isShown=true;
    //   localStorage.clear();
    //   }
    
      
    // }

// toggleHide(){
//   this.isHide=false;
//   this.isOut=true;
// }
// toggleShow2(){
//   this.isHide=true;
//   this.isShown=true;
// }
}
