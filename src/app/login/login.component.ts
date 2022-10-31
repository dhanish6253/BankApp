import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execution

  aim='your perfect banking partner';
  accounts="enter your Acno here";

  acno='';
  pswd='';


  constructor() { }//1st execution

  ngOnInit(): void {//life cycle hooks - initial process //2nd execution
  }
  userDetails:any ={//object of objects
    1000:{acno:1000,username:'Dhanish',password:1000,balance:10000},
    1001:{acno:1001,username:'karthik',password:1001,balance:10000},
    1002:{acno:1002,username:'shibil',password:1002,balance:10000},


  }
  //userdefined function()// 4th execution

  acnoChange(event:any){
    //console.log(event);
    console.log(event.target.value);
    this.acno=event.target.value;
    }

  pswdChange(event:any){
    console.log(event.target.value);
    this.pswd=event.target.value;


  }
login(){
  //alert('login clicked');
  var acno=this.acno;//1000
  var pswd=this.pswd;//1000

  var userDetails=this.userDetails;

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert("login successfull");
      
    }
    else{
      alert("incorrect password");
    }
  }
  else{
    alert("user doesnot exist");
    
  }

}


}


