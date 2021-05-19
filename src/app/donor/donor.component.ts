import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorserviceService } from 'app/donorservice.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  constructor(private router:Router, private adminService:DonorserviceService) { }

  ngOnInit(): void {
  }

}
