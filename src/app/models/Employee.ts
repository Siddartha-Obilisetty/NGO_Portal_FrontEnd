import { Address } from "./Address";


export class Employee{
    employeeId:number;
    employeeName:string;
    email:string;
    phone:string;
    username:string;
    password:string;
    address:Address=new Address();
    constructor(){}
    /* constructor(employeeId:number,employeeName:string,email:string,phone:string,
      username:string,password:string,address:Address){
      this.employeeId = employeeId;	this.employeeName = employeeName;
		  this.email = email;				this.phone = phone;
		  this.username = username;		this.password = password;
		  this.address = address;
    } */
    toString():string {
		return "Employee [employeeId=" + this.employeeId + ", employeeName=" + 
        this.employeeName + ", email=" + this.email + ", phone="+ this.phone + 
        ", username=" + this.username + ", password=" + this.password + ", address=" 
        + this.address + "]";
	}
}