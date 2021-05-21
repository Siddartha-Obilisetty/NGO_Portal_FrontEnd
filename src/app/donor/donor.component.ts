import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { DonorserviceService } from 'app/donorservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  donor:Donor=new Donor();
  donorId:number;
  constructor(private router:Router, private donorService:DonorserviceService,private route:ActivatedRoute,private adminService:AdminserviceService) { }

  ngOnInit(): void {
    this.donorId=this.route.snapshot.params['id'];
    this.adminService.findDonorById(this.donorId).subscribe(
      donor=>{
        this.donor=donor;
      }
    );

  }
  
  donateToNGO(){
    this.router.navigate(['donor',this.donorId,'donate'])
  }
  
}
