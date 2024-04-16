import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  button = 'Login';
  isLoading = false;
  UserName: any;
  Password: any;
  loading = false;
  show = false;
  bussinessData: any;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  sentResetMail: boolean = false;
  sentResetMailDisable: boolean = false;


  constructor(private _route: Router, private fb: FormBuilder, private _users: LoginService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onclicktoggle() {
    this.show = !this.show;
  }
  
  async DoLogin() {
    try {
      this.submitted = true;

      if (this.form.invalid) {
        return;
      }
      this.isLoading = true;
      this.button = 'Processing';
      this.UserName = this.form.controls['username'].value;
      this.Password = this.form.controls['password'].value;

      this._users.Login(this.UserName, this.Password).pipe()
        .subscribe({
          next: async (data) => {
            localStorage.setItem('UserData', JSON.stringify(data));
            this.loading = false;
            this.isLoading = false;
            this.button = 'Login';
            this._route.navigate(['group-list']);

          },
          error: error => {
            this.isLoading = false;
            this.button = 'Login';
          }
        });
    } catch (error) {
      console.error("This is error message", error);
    }
  }
}
