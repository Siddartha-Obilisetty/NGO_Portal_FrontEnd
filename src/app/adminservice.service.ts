import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DonationDistributionStatus } from './models/DonationDistributionStatus';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  baseURL='http://localhost:8085/admin';
  
  constructor(private httpModule:HttpClient) { }


  addEmployee(employee:Employee):Observable<any>{
    console.log("add employee in service");
    return this.httpModule.post(this.baseURL+'/employee/add',employee);
  }

  modifyEmployee(employee:Employee):Observable<any>{
    console.log("modify employee in service");
    return this.httpModule.put(this.baseURL+'/employee/update',employee);
  }

  deleteEmployee(employeeId:number):Observable<any>{
    console.log("delete employee in service");
    return this.httpModule.delete(this.baseURL+'/employee/delete/'+employeeId);
  }

  approveDonation(dd_id:number):Observable<DonationDistributionStatus>{
    console.log("approve donation in service");
    return this.httpModule.get<DonationDistributionStatus>(this.baseURL+'/approveDonation/'+dd_id);
  }

  findAllEmployee():Observable<Employee[]>{
    console.log("find all employee in service");
    return this.httpModule.get<Employee[]>(this.baseURL+'/employee/all');
  }

  findEmployeeById(empid:number):Observable<Employee>{
    console.log("get employee by id in service");
    return this.httpModule.get<Employee>(this.baseURL+'/employee/getById/'+empid);
  }

  findEmployeeByName(ename:string):Observable<Employee[]>{
    console.log("get employee by Name in service");
    return this.httpModule.get<Employee[]>(this.baseURL+'/employee/getByName/'+ename);
  }
}
