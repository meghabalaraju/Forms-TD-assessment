import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form', {static: true}) signupForm : NgForm;
  defaultSubscription = "Advanced";
  formSubmited = false;

  data = {
    email: '',
    subscription: '',
    password: '',
  }

  onSubmit() {
    this.formSubmited= true;
    console.log(this.signupForm); 

    this.data.email = this.signupForm.value.email;
    this.data.subscription = this.signupForm.value.subscription;
    this.data.password = this.signupForm.value.password;
    
    this.signupForm.reset();
  
  }


}
