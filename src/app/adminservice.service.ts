import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {

  baseURL='http://localhost:8085/admin';

  constructor(private httpClient:HttpClient) { }


  addEmployee(employee:Employee):Observable<any>{
    console.log("add employee in service");
    return this.httpClient.post(this.baseURL+'/employee/add',employee).pipe(catchError(this.handleError1));
  }
  handleError1(errorResponse1: HttpErrorResponse){
    console.log(errorResponse1.error);
    return throwError(errorResponse1.error); 

  }

  modifyEmployee(empid:number,employee:Employee):Observable<any>{
    console.log("modify employee in service");
    console.log(empid,employee);
    return this.httpClient.put(this.baseURL+'/employee/update/'+empid,employee).pipe(catchError(this.handleError1));
  }
  handleError6(errorResponse6: HttpErrorResponse){
      console.log(errorResponse6.error);
      return throwError(errorResponse6.error); 

  }

  deleteEmployee(employeeId:number):Observable<any>{
    console.log("delete employee in service");
    return this.httpClient.delete(this.baseURL+'/employee/delete/'+employeeId).pipe(catchError(this.handleError2));
  }
  handleError2(errorResponse2: HttpErrorResponse){
    console.log(errorResponse2.error);
    return throwError(errorResponse2.error); 

  }

  approveDonation(dd_id:number):Observable<any>{
    console.log("approve donation in service");
    return this.httpClient.get(this.baseURL+'/approveDonation/'+dd_id);
  }

  findAllEmployee():Observable<any>{
    console.log("find all employee in service");
    return this.httpClient.get(this.baseURL+'/employee/all');
  }

  findEmployeeById(empid:number):Observable<any>{
    console.log("get employee by id in service");
    return this.httpClient.get(this.baseURL+'/employee/getById/'+empid).pipe(catchError(this.handleError3));
  }
  handleError3(errorResponse3: HttpErrorResponse){
    console.log(errorResponse3.error);
    return throwError(errorResponse3.error); 
  }

  findEmployeeByName(ename:string):Observable<any>{
    console.log("get employee by Name in service");
    return this.httpClient.get(this.baseURL+'/employee/getByName/'+ename).pipe(catchError(this.handleError4));
  }
  handleError4(errorResponse4: HttpErrorResponse){
    console.log(errorResponse4.error);
    return throwError(errorResponse4.error); 
  }


  getAllDonations():Observable<any>{
    console.log("get all donations in service");
    return this.httpClient.get(this.baseURL+'/donationDistribution/all');
  }

  findAllDonors():Observable<any>{
    console.log("find all Donor in service");
    return this.httpClient.get(this.baseURL+'/donor/all');
  }

  findDonorById(donorid:number):Observable<any>{
    console.log("get Donor by id in service");
    return this.httpClient.get(this.baseURL+'/donor/getById/'+donorid).pipe(catchError(this.handleError5));
  }
  handleError5(errorResponse5: HttpErrorResponse){
    console.log(errorResponse5.error);
    return throwError(errorResponse5.error); 

  }
}
