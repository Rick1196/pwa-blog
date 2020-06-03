import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:any;
  constructor(private _posts:PostsService) { }

  ngOnInit(): void {
    this._posts.$posts.subscribe({
      next: (v: any) => {
        this.posts = v.posts;
      }
    });
  }


}
