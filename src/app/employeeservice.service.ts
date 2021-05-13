import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  baseURL='http://localhost:8085/employee';

  constructor(private httpModule:HttpClient) { }
}
