import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  session: any; 
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this._auth.$session.subscribe({
      next: (v: any) => {
        let status = v;
        if (status.isLoggedIn == true) {
          this.session = v;
        } else {
          this.session = null;
          this._router.navigate(['']);
        }
      }
    });
  }

  async signOut(){
    await this._auth.signOut();
    this._router.navigate(['']);
  }

}
