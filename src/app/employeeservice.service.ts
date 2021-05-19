import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NeedyPeople } from './models/NeedyPeople';

@Injectable({
  providedIn: 'root'
})

export class EmployeeserviceService {

  baseURL='http://localhost:8085/employee';

  constructor(private httpClient:HttpClient) { }

  employeeLogin(username:string,password:string):Observable<any>{
    console.log(this.baseURL+'/login?username='+username+'&password='+password);
    return this.httpClient.get(this.baseURL+'/login?username='+username+'&password='+password);
  }
  
  addNeedyPerson(needyPeople:NeedyPeople):Observable<any>{
    console.log("add needyperson in service");
    return this.httpClient.post(this.baseURL+'/needypeople/add',needyPeople);
  }

  removeNeedyPerson(needyPeopleId:number):Observable<any>{
    console.log("delete needyperson in service");
    return this.httpClient.delete(this.baseURL+'/needypeople/delete/'+needyPeopleId);
  }

  findAllNeedyPeople():Observable<any>{
    console.log("find all needyperson in service");
    return this.httpClient.get(this.baseURL+'/needypeople/all');
  }

  findNeedyPeopleById(needyPeopleId:number):Observable<any>{
    console.log("get needyperson by id in service");
    return this.httpClient.get(this.baseURL+'/needypeople/getbyId/'+needyPeopleId);
  }

  findNeedyPeopleByName(needyPeopleName:string):Observable<any>{
    console.log("get needyperson by Name in service");
    return this.httpClient.get(this.baseURL+'/needypeople/getbyName/'+needyPeopleName);
  }


}
