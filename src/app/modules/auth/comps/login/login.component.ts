import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() cancel = new EventEmitter<any>();
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  errorResponse: string;
  loading = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
    this.auth.login(this.form.value).then(data => {
      console.log('auth', data);
      this.router.navigate(['posts/home']);
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
      this.errorResponse = 'Wrong credentials, try again.';
    });
  }

  return() {
    this.cancel.emit(0);
  }



}
