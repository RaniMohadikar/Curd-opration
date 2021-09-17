import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 firstName=''
 lastName=''
 email=''
 password=''
  constructor() { }

  ngOnInit(): void {
  }
  signup(){
    console.log('my firstName',this.firstName)
    console.log('my lastName',this.lastName)
    console.log('my email',this.email)
    console.log('my password',this.password)
  }
}
