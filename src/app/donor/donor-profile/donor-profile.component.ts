import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { DonorserviceService } from 'app/donorservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {

  donorId:number;
  donor:Donor;
  error:string;
  
  constructor(private donorService:DonorserviceService,private adminService:AdminserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDonorData();
  }

  loadDonorData(){
    this.donorId=this.route.snapshot.params['id'];
    this.adminService.findDonorById(this.donorId).subscribe(
      donor=>
      {
        this.donor=donor;
      },error=>{
        this.error=error;
      }
      
    );
  }
}
