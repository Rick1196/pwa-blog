import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId: number;
  post: any;
  constructor(private router: ActivatedRoute, private posts: PostsService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.postId = params.post;
      this.post = this.posts.getPost(String(this.postId));
      console.log('detail', this.post);

    });
  }

}
