import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  course_url=environment.course_api_url;
  constructor(private httpClient:HttpClient) {
  //  this.flight_URL=
   }
  
  // getAllFlights():Observable<Flight[]>{
  //   //return this.httpClient.get<Flight[]>(`https://localhost:5011/v1.0/api/FlightApp/Airline/GetAllAirlines`);
  //   return this.httpClient.get<Flight[]>(this.airline_url+`GetAllAirlines`);
  // }
  addFlight(courseObj:Flight):Observable<boolean> {
    return this.httpClient.post<boolean>(this.course_url+'AddCourse',courseObj);
  }
  // deleteAirline(airlineName: string):Observable<boolean> {
  //   return this.httpClient.delete<boolean>(this.airline_url+'DeleteAirline/'+airlineName);
  // }

  // blockAirline(airlineNam: string, flightObj:Flight):Observable<boolean>{ 
  //   return this.httpClient.put<boolean>(this.airline_url+`BlockAirline/`+airlineNam, flightObj);
  // }
  // getAllFlightsA():Observable<Flight[]> {
  //   return this.httpClient.get<Flight[]>(this.airline_url+"GetAllAirlinesAdmin");
  // }
  //https://localhost:5011/api/v1.0/lms/Courses/Info/typescript
  //https://localhost:5011/api/v1.0/lms/Courses/GetCourses/dotnet/2022-09-20%2006%3A42%3A08.7300000/2022-10-18%2006%3A42%3A08.7300000
  SearchCourse(technology: any):Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.course_url+`Info/`+ technology);  
  }
  SearchCourseByDuration(technology: any, startDate:any, endDate:any):Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.course_url+`GetCourses/`+ technology+`/`+startDate+`/`+endDate);  
  }
}
