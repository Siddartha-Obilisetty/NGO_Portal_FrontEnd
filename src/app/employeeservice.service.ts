import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NeedyPeople } from './models/NeedyPeople';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeserviceService {

  baseURL='http://localhost:8085/employee';

  constructor(private httpClient:HttpClient) { }

  employeeLogin(username:string,password:string):Observable<any>{
    console.log(this.baseURL+'/login?username='+username+'&password='+password);
    return this.httpClient.get(this.baseURL+'/login?username='+username+'&password='+password).pipe(catchError(this.handleError));
  }
  handleError(errorResponse: HttpErrorResponse)
  {
    console.log(errorResponse.error);
    return throwError(errorResponse.error); 
  }  
  
  addNeedyPerson(needyPeople:NeedyPeople):Observable<any>{
    console.log("add needyperson in service");
    return this.httpClient.post(this.baseURL+'/needypeople/add',needyPeople).pipe(catchError(this.handleError1));
  }
  handleError1(errorResponse1: HttpErrorResponse){
    console.log(errorResponse1.error);
    return throwError(errorResponse1.error);   
  }

  removeNeedyPerson(needyPeopleId:number):Observable<any>{
    console.log("delete needyperson in service");
    return this.httpClient.delete(this.baseURL+'/needypeople/delete/'+needyPeopleId).pipe(catchError(this.handleError4));;
  }
  handleError4(errorResponse4: HttpErrorResponse){
    console.log(errorResponse4.error);
    return throwError(errorResponse4.error);   

  }
  
  findAllNeedyPeople():Observable<any>{
    console.log("find all needyperson in service");
    return this.httpClient.get(this.baseURL+'/needypeople/all');
  }

  findNeedyPeopleById(needyPeopleId:number):Observable<any>{
    console.log("get needyperson by id in service");
    return this.httpClient.get(this.baseURL+'/needypeople/getbyId/'+needyPeopleId).pipe(catchError(this.handleError2));
  }
  handleError2(errorResponse2:HttpErrorResponse){
    console.log(errorResponse2.error);
    return throwError(errorResponse2.error);   

  }

  findNeedyPeopleByName(needyPeopleName:string):Observable<any>{
    console.log("get needyperson by Name in service");
    return this.httpClient.get(this.baseURL+'/needypeople/getbyName/'+needyPeopleName).pipe(catchError(this.handleError3));
  }
  handleError3(errorResponse3: HttpErrorResponse){
    console.log(errorResponse3.error);
    return throwError(errorResponse3.error);   

  }

  helpNeedyPeopleById(npId:number):Observable<any>{
    console.log("help needyperson by Name in service");
    return this.httpClient.put(this.baseURL+'/helpNeedyPeople/'+npId,npId);
  }

}
