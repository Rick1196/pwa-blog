import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: any;
  
  $posts = new BehaviorSubject<any>(this.posts);

  constructor(private _http: HttpClient) { 
    this.getAllPosts().then(()=>{console.log({message:'success'});
    }).catch(err=>console.error(err))
  }

  getPost(id: string) {
    let index = this.posts.findIndex(x => x.id == id);
    
    return this.posts[index];
  }

  createPost(post: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post<any>(`${environment.baseUrl}/todo`, post).subscribe(
        success => resolve(success),
        error => reject(error)
      )
    })
  }

  getAllPosts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get(`${environment.baseUrl}/todos`).subscribe(
        posts => {
          this.posts = posts;
          this.$posts.next(this.posts);
          resolve({ message: 'success' })
        },
        error => reject(error)
      )
    })
  }
}
