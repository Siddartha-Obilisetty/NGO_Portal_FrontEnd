export class Admin{
    adminId:number;
    adminUsername:string;
    adminPassword:string;
    // constructor(adminId:number,adminUsername:string,adminPassword:string){
    //     this.adminId = adminId;				
    //     this.adminUsername = adminUsername;
	// 	this.adminPassword = adminPassword;
    // }
    constructor(){}

    toString():string{
        return 'Admin[adminId=' +this. adminId + ', adminUsername=' + 
        this.adminUsername + ', adminPassword=' + this.adminPassword
        + ']';
    }
}