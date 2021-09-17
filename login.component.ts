import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email=''
  password=''
  constructor() { }

  ngOnInit(): void {
  }
 
  login(){
    if(this.email == "prajwal@gmail.com"){
      if(this.password =="12345"){
        alert("Login Successfully....")
        }else{
          alert("Wrong Password..!!")       
      }
    }else{
      alert("Invalid!!!")
      
    }
  }

  
}


