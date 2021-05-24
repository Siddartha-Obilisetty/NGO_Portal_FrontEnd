import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { DonorserviceService } from 'app/donorservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-donor-nav',
  templateUrl: './donor-nav.component.html',
  styleUrls: ['./donor-nav.component.css']
})
export class DonorNavComponent implements OnInit {
  donor:Donor = new Donor;
  donorId:number;

  constructor(private router:Router,private donorService:DonorserviceService,private route:ActivatedRoute,private adminService:AdminserviceService) { }

  ngOnInit(): void {
    this.donorId=this.route.snapshot.params['id'];
    this.adminService.findDonorById(this.donorId).subscribe(
      donor=>{
        this.donor=donor;
      }
    );
  }
  goToProfile(){
    this.router.navigate(['employee',this.donorId,'profile']);
  }
}
