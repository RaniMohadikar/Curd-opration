import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

 export class EmployeesComponent implements OnInit {
    isEdit=false;
    editIndex='';
     firstName='';
     lastName='';
    
     userList:any = []
     constructor() { }
   
     ngOnInit(): void {
     }
   
     onSubmit(){
       let userObj = {
         firstName:this.firstName,
         lastName:this.lastName,
       }
       this.userList.push(userObj)
       console.log('userObj',this.userList)   
     }
     onClear(index: any){
       console.log('index',index)
       this.userList.splice(index,1)
     }
     
     onEdit(index:any){
       this.isEdit=true
       this.editIndex=index;
   
       this.firstName=this.userList[index].firstName;
       this.lastName=this.userList[index].lastName;
       console.log('index',index)
   
     }
     onUpdate(){
       let userObj = {
         firstName:this.firstName,
         lastName:this.lastName,
       }
       this.userList[this.editIndex]=userObj
       this.isEdit=false
     }
   
   
   
   }
