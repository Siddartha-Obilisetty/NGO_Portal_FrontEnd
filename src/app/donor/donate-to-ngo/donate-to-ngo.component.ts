import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { DonorserviceService } from 'app/donorservice.service';
import { Donation } from 'app/models/Donation';

@Component({
  selector: 'app-donate-to-ngo',
  templateUrl: './donate-to-ngo.component.html',
  styleUrls: ['./donate-to-ngo.component.css']
})
export class DonateToNgoComponent implements OnInit {

  donation:Donation=new Donation();
  donorid:number;

  constructor(private router:Router, private donorService:DonorserviceService,private route:ActivatedRoute,private adminService:AdminserviceService) { }

  ngOnInit(): void {
    this.donorid=this.route.snapshot.params['id'];
  }

  addDonation(){
    this.donorService.donateToNGO(this.donation).subscribe();
    alert("Thank You for the Donation..!");
  }

  onSubmit(){
    this.donation.donor.donorId=this.donorid;
    this.addDonation();
    this.router.navigate(['donor',this.donorid]);
  }

}
