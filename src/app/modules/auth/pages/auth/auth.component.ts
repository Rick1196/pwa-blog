import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  state:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  close($event:any){
    this.state = 1;
  }

}
