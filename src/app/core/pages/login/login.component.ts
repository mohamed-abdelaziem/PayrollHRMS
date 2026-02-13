/// <reference types="../../../../../@types/jquery" />
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  imports: [RouterLink , ReactiveFormsModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {


private router = inject(Router);
loginForm : FormGroup = new FormGroup({
email : new FormControl('' ,[Validators.email ,Validators.required]),
password : new FormControl('' , [Validators.pattern(/^[a-z]{3,10}$/ ) , Validators.required])
})

private toastr = inject(ToastrService);

  login():void{
    if(this.loginForm.get('email')?.invalid && this.loginForm.get('password')?.invalid){
      this.loginForm.markAllAsTouched();
      this.toastr.error('Login Failed 😌');
      return;
    }

    this.toastr.success('Welcome 😊');
    this.router.navigate(['/dashboard/']);

  }


 
}
