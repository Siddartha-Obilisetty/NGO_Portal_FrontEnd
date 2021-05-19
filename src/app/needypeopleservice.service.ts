import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NeedyPeople } from './models/NeedyPeople';
import { LoginComponent } from './needypeople/login/login.component';

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
    return this.httpClient.get(this.baseURL+'/login',{params});
  }




}
