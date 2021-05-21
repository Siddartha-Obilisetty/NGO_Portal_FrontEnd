import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Donor } from './models/Donor';


@Injectable({
  providedIn: 'root'
})
export class DonorserviceService {

  baseURL='http://localhost:8085/donor';

  constructor(private httpClient:HttpClient) { }

  registerDonor(donor:Donor):Observable<any>{
    console.log("create donor ");
    return this.httpClient.post(this.baseURL+'/register',donor).pipe(catchError(this.handleError1));
 }
 handleError1(errorResponse1: HttpErrorResponse){
  let errorMessage1 = "An error occured";
  console.log(errorResponse1.error);
  if(errorResponse1.error[0]){

      errorMessage1='Duplicate Donor';
      
  }
  return throwError(errorMessage1);   
}


   login(username:string,password:string):Observable<any>{
  console.log("login donor");
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
        errorMessage='No Such Donor';
        break;
      case 'W':
        errorMessage='Wrong Credentials!!!';
        break;
    }
    return throwError(errorMessage);   
  }
  
  forgotPassword(username:string):Observable<any>{
    console.log("");
    let params=new HttpParams()
      .set('username',username);
    return this.httpClient.get(this.baseURL+'/forgot_password',{params});
 }
  resetPassword(username:string,oldPassword:string,newPassword:string):Observable<any>{
  console.log("");
  let params=new HttpParams()
      .set('username',username)
      .set('password',oldPassword)
      .set('password',newPassword);
  return this.httpClient.put(this.baseURL+'/reset_password',{params});
 }
}
