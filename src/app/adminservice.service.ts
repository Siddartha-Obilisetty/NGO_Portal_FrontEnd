import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {

  baseURL='http://localhost:8085/admin';

  constructor(private httpClient:HttpClient) { }


  addEmployee(employee:Employee):Observable<any>{
    console.log("add employee in service");
    return this.httpClient.post(this.baseURL+'/employee/add',employee);
  }

  modifyEmployee(empid:number,employee:Employee):Observable<any>{
    console.log("modify employee in service");
    console.log(empid,employee);
    return this.httpClient.put(this.baseURL+'/employee/update/'+empid,employee);
  }

  deleteEmployee(employeeId:number):Observable<any>{
    console.log("delete employee in service");
    return this.httpClient.delete(this.baseURL+'/employee/delete/'+employeeId);
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
    return this.httpClient.get(this.baseURL+'/employee/getById/'+empid);
  }

  findEmployeeByName(ename:string):Observable<any>{
    console.log("get employee by Name in service");
    return this.httpClient.get(this.baseURL+'/employee/getByName/'+ename);
  }

  getAllDonations():Observable<any>{
    console.log("get all donations in service");
    return this.httpClient.get(this.baseURL+'/donationDistribution/all');
  }
}
