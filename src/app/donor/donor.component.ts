import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorserviceService } from 'app/donorservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  donor:Donor=new Donor();
  constructor(private router:Router, private adminService:DonorserviceService) { }

  ngOnInit(): void {
  }

}
