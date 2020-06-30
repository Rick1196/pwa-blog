import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  session: any;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.$session.subscribe({
      next: (v: any) => {
        const status = v;
        if (status.isLoggedIn === true) {
          this.session = v;
        } else {
          this.session = null;
          this.router.navigate(['']);
        }
      }
    });
  }

  async signOut() {
    await this.auth.signOut();
    this.router.navigate(['']);
  }

}
