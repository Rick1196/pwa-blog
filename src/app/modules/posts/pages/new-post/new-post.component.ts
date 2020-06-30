import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../../../services/posts.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public Editor = ClassicEditor;
  loading = false;
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    imagePath: new FormControl('', Validators.required),
    imageCard: new FormControl('', Validators.required),
    audio: new FormControl(''),
    video: new FormControl(''),
    body: new FormControl('', Validators.required)
  });
  constructor(private post: PostsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  submit() {

    if (this.form.valid === true) {
      this.post.createPost(this.form.value).then(data => {
        this.showSuccess();
        this.loading = false;
        this.form.reset();
      }).catch((error) => {
        this.showError();
        console.error(error);
        this.loading = false;
      });
    }
  }

  showSuccess() {
    this.toastr.success('Congratulations!', 'Now your post is public!');
  }

  showError() {
    this.toastr.error('Sorry!', 'We are having troubles publishing your post.');
  }

}
