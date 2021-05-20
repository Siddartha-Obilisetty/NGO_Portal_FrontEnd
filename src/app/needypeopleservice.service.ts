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
    return this.httpClient.post(this.baseURL+'/register',person);
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
    if(!errorResponse.error || !errorResponse.error.error){
      return throwError(errorMessage);
    }
    switch(errorResponse.error.error.message){
      case 'USERNAME_DOESNOT_EXIST':
        errorMessage='NoSuchNeedyPeople';
        break;
      case 'INVALID_PASSWORD':
        errorMessage='WrongCredentials';
        break;
    }
    return throwError(errorMessage);


    
    

   
  }




}
