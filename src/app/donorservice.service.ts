import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from './models/Donor';


@Injectable({
  providedIn: 'root'
})
export class DonorserviceService {

  baseURL='http://localhost:8085/donor';

  constructor(private httpClient:HttpClient) { }

  registerDonor(donor:Donor):Observable<any>{
    console.log("create donor ");
    return this.httpClient.post(this.baseURL+'/donor/register',donor);
}
  login(username:string,password:string):Observable<any>{
  console.log("login donor");
  return this.httpClient.get(this.baseURL+'/donor/login',username,password);
}
  forgotPassword(username:string):Observable<any>{
    console.log("");
    return this.httpClient.get(this.baseURL+'/donor/forgot_password'+username);
}
  resetPassword(username:string):Observable<any>{
  console.log("");
  return this.httpClient.put(this.baseURL+'/donor/reset_password'+username);
}
}
