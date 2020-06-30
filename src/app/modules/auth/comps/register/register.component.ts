import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../../common/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancel = new EventEmitter<any>();
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required])
  });

  errorResponse: string;
  loading = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    const data = this.form.value;
    data.confirmPassword = data.password;
    this.auth.signUp(data).then(info => {
      // console.log('auth', data);
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
