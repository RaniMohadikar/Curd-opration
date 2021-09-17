import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  isEdit=false;
  editIndex='';
   firstName='';
   lastName='';
   zoNe='';
   braNch='';
  
   userList:any = []
   constructor() { }
 
   ngOnInit(): void {
   }
 
   onSubmit(){
     let userObj = {
       firstName:this.firstName,
       lastName:this.lastName,
       braNch:this.braNch,
       zoNe:this.zoNe,
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
     this.lastName=this.userList[index].lastName;
     this.zoNe=this.userList[index].zoNe;
     console.log('index',index)
 
   }
   onUpdate(){
     let userObj = {
       firstName:this.firstName,
       lastName:this.lastName,
       braNch:this.braNch,
       zoNe:this.zoNe,
     }
     this.userList[this.editIndex]=userObj
   }

}
