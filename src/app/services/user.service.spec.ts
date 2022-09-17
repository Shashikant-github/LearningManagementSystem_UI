import { inject, TestBed } from '@angular/core/testing';
import { User } from '../models/user';
import {
    HttpClientTestingModule,
    HttpTestingController
  } from "@angular/common/http/testing";

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let userServ: UserService;
  let user:User;
  let baseUrl=environment.user_api_url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
  });
  httpTestingController = TestBed.get(HttpTestingController);
  user = {
   userName:"John",
   emailID:"John@gmail.com",
   mobile:"9809809800",
   password:"John",
   address:"Kasol",
    city: "Boston"
  };
});

beforeEach(inject(
  [UserService],
  (service: UserService) => {
    userServ = service;
  }
));


// it("should return data", () => {
//   let result: User[];
//   userServ..getTravellers().subscribe(t => {
//     result = t;
//   });
//   const req = httpTestingController.expectOne({
//     method: "GET",
//     url: baseUrl
//   });
 
//   req.flush([user]);
 
//   expect(result[0]).toEqual(user);
// });
it("Register User", () => {
  userServ.registerUser(user).subscribe();
 
  let req = httpTestingController.expectOne({ method: "POST", url: baseUrl+'registerUser' });
  expect(req.request.body).toEqual(user);
});

});
