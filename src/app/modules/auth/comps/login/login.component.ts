import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {AuthService} from '../../../../common/services/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required),
  });
  errorResponse:string;
  loading:boolean = false;

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
    this._auth.login(this.form.value).then(data=>{
      console.log('auth',data);
      this._router.navigate(['posts/home'])
      this.loading = false;
    }).catch(error=>{
      console.error(error);
      this.loading = false;
      this.errorResponse = "Wrong credentials, try again."
    })
  }



}
