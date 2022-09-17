import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight';

import { FlightService } from './flight.service';

describe('FlightService', () => {
  let httpTestingController: HttpTestingController;
  let flightServ: FlightService;
  let flight:Flight;
  let baseUrl=environment.airline_api_url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
  });
  httpTestingController = TestBed.get(HttpTestingController);
  flight={
    airlineName:"Sho",
    source:"Masaurhi",
    destination:"Bengaluru",
    ticketPrice:"8000",
    category:"Domestic",
    airlineCode:""
  }
});

beforeEach(inject(
  [FlightService],
  (service: FlightService) => {
    flightServ = service;
  }
));


it("Should return Data", () => {
    let result1,result2: Flight[];
    flightServ.getAllFlights().subscribe(res=>{
      result1=res;
    });
   
   //result1=result2;

  const req = httpTestingController.expectOne({
    method: "GET",
    url: baseUrl+`GetAllAirlines`
  });
  req.flush([flight]);
  
  //expect(result1[0]).toEqual(flight);
});

it("Add Flight", () => {
  flightServ.addFlight(flight).subscribe();
  let req = httpTestingController.expectOne({ method: "POST", url: baseUrl+'AddAirline'});
  expect(req.request.body).toEqual(flight);
});

});