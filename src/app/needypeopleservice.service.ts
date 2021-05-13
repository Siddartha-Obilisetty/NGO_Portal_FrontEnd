import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeedypeopleserviceService {

  baseURL='http://localhost:8085/needypeople';

  constructor(private httpModule:HttpClient) { }
}
