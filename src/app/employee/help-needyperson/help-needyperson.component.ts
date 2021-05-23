import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';

@Component({
  selector: 'app-help-needyperson',
  templateUrl: './help-needyperson.component.html',
  styleUrls: ['./help-needyperson.component.css']
})
export class HelpNeedypersonComponent implements OnInit {

  empid:number;
  npid:number;

  constructor(private empService:EmployeeserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.empid=this.route.snapshot.params['id'];
    this.npid=this.route.snapshot.params['npid'];
    this.help();
    this.router.navigate(['employee',this.npid,'findNeedyPeople','all'])
  }
  
  help(){
    this.empService.helpNeedyPeopleById(this.npid).subscribe(
      result=>{
        console.log(result);
      },
      error=>
      {
        console.log(error)
      }
    );
  }
}
