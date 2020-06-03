import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NewPostComponent } from './pages/new-post/new-post.component';
@NgModule({
  declarations: [HomeComponent, PostDetailComponent, NewPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    CKEditorModule
  ]
})
export class PostsModule { }
