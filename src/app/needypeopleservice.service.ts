import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NeedyPeople } from './models/NeedyPeople';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeedypeopleserviceService {

  baseURL='http://localhost:8085/needypeople';

  constructor(private httpClient:HttpClient) { }

  registerNeedyPerson(person:NeedyPeople):Observable<any>{
    console.log("register needy person");
    return this.httpClient.post(this.baseURL+'/register',person).pipe(catchError(this.handleError1));
  }
  handleError1(errorResponse1: HttpErrorResponse){
    let errorMessage1 = "An error occured";
    console.log(errorResponse1.error);
    if(errorResponse1.error[0]){
  
        errorMessage1='Duplicate Needy People';
        
    }
    return throwError(errorMessage1);   
  }

    requestForHelp(npId:number): Observable<any>{
      console.log("request for help in service");
      return this.httpClient.put(this.baseURL+'/request/',npId);
  }
  login(username:string,password:string): Observable<any>{
    let params=new HttpParams()
      .set('username',username)
      .set('password',password);
    return this.httpClient.get(this.baseURL+'/login',{params}).pipe(catchError(this.handleError));
  }
  
  handleError(errorResponse: HttpErrorResponse)
  {
    let errorMessage = 'An error occurred';
    
    console.log(errorResponse.error);
    switch(errorResponse.error[0]){
      case 'T':
        errorMessage='No Such Needy People';
        break;
      case 'W':
        errorMessage='Wrong Credentials!!!';
        break;
    }
    return throwError(errorMessage);   
  }




}
