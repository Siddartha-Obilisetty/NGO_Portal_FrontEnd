import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonorserviceService {

  baseURL='http://localhost:8085/donor';

  constructor(private httpModule:HttpClient) { }
}
