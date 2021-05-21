import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-find-all-donors',
  templateUrl: './find-all-donors.component.html',
  styleUrls: ['./find-all-donors.component.css']
})
export class FindAllDonorsComponent implements OnInit {

  donors:Donor[]=[];
  donor:Donor=new Donor();

  constructor(private adminService:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.adminService.findAllDonors().subscribe(
      donors=>{
        this.donors=donors;
      }
    );
  }

  getDonorById(donorid:number){
    this.router.navigate(['admin/getDonorById/',donorid]);
  }


}
