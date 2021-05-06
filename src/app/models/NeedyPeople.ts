import { Address } from "./Address";

export class NeedyPeople{
    needyPeopleId:number;
    needyPeopleName:string;
    phone:string;
    familyIncome:number;
    username:string;
    password:string;
    request:number;
    address:Address;
    constructor(needyPeopleId:number,needyPeopleName:string,
        phone:string,familyIncome:number,username:string,
        password:string,request:number,address:Address){
        this.needyPeopleId = needyPeopleId;		this.needyPeopleName = needyPeopleName;
		this.phone = phone;						this.familyIncome = familyIncome;
		this.username = username;				this.password = password;
		this.request = request;	                this.address = address;
    }
    toString():string{
        return "NeedyPeople [needyPeopleId=" + this.needyPeopleId + ", needyPeopleName=" 
        + this.needyPeopleName + ", phone="	+ this.phone + ", familyIncome=" + 
        this.familyIncome + ", username=" + this.username + ", password=" + this.password
		+ ", request=" + this.request + ", address=" + this.address + "]";
	
    }
}