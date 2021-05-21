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
    let errorMessage = 'An error occurred';
    
    console.log(errorResponse.error);
    switch(errorResponse.error[0]){
      case 'T':
        errorMessage='No Such Employee';
        break;
      case 'W':
        errorMessage='Wrong Credentials!!!';
        break;
    }
    return throwError(errorMessage); 
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
