import { Address } from "node:cluster";

export class Donor{
    donorId:number;
    donorName:string;
    email:string;
    phone:string;
    username:string;
    password:string;
    address:Address;
    constructor(donorId:number, donorName:string,email:string,phone:string,
        username:string,password:string,address:Address){
        this.donorId = donorId;		this.donorName = donorName;
		this.email = email;			this.phone = phone;
		this.username = username;	this.password = password;
		this.address=address;

    }
    toString():string {
		return "Donor [donorId=" + this.donorId + ", donorName=" + this.donorName
        + ", email=" + this.email + ", phone=" + this.phone + ", username=" + 
        this.username + ", password=" + this.password + ", address=" + this.address
        + "]";
	}
}