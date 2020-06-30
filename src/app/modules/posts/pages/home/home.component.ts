import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.$posts.subscribe({
      next: (v: any) => {
        this.posts = v;
        console.log('home', this.postsService);
      }
    });
  }


}
