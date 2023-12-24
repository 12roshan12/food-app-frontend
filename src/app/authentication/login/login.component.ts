import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  signin: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, private router: Router,private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.signin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  submit() {
    this.toastr.success('Login Successfully')
    this.signin.markAllAsTouched()
    this.router.navigate(['/home'])
  }

}
