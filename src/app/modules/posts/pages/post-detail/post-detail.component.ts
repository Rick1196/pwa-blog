import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../../services/posts.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId:number;
  post:any;
  constructor(private _router:ActivatedRoute, private _posts:PostsService) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe(params => {
      this.postId = params.post;
      this.post = this._posts.getPost(String(this.postId));
      console.log('detail',this.post);
      
    })
  }

}
