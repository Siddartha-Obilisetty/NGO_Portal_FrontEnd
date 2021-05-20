import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';

@Component({
  selector: 'app-delete-needyperson',
  templateUrl: './delete-needyperson.component.html',
  styleUrls: ['./delete-needyperson.component.css']
})
export class DeleteNeedypersonComponent implements OnInit {

  needyPeopleId: number;
  employeeId:number;

  constructor(private employeeService: EmployeeserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.needyPeopleId = this.route.snapshot.params['npid'];
    console.log(this.needyPeopleId);
    this.deletePerson(this.needyPeopleId);
  }

  deletePerson(needyPeopleId: number) {
    this.employeeService.removeNeedyPerson(needyPeopleId).subscribe(
      error => console.error(error));
      alert("Needy person deleted succesfully");
      this.reloadEmployeeData();

  }

  reloadEmployeeData() {
    this.employeeId=this.route.snapshot.params['id'];
    this.router.navigate(['employee',this.employeeId,'findNeedyPeople','all']);
  }
}


