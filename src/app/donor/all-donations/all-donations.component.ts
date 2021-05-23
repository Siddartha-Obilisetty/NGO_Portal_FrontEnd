import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorserviceService } from 'app/donorservice.service';
import { Donation } from 'app/models/Donation';

@Component({
  selector: 'app-all-donations',
  templateUrl: './all-donations.component.html',
  styleUrls: ['./all-donations.component.css']
})
export class AllDonationsComponent implements OnInit {

  donations:Donation[]=[];
  donorId:number;

  constructor(private router:Router,private donorService:DonorserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.donorId=this.route.snapshot.params['id'];
    this.donorService.getDonations(this.donorId).subscribe(
      donations=>{
        this.donations=donations
      },
      error=>{console.log(error)}
    );
  }

  goBack(){
    this.router.navigate(['donor',this.donorId]);
  }
}
