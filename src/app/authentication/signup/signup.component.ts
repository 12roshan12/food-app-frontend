import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, private router: Router,private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submit() {
    this.toastr.success('Registration successful. Please login')
    this.registrationForm.markAllAsTouched()
    this.router.navigate(['/authentication/login'])
  }

}
