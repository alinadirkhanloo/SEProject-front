import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments = [];
  postTitle = '';
  postid = null;
  commentForm: FormGroup;
  constructor(private shared: SharedDataService, private api: ApiService, private formbuilder: FormBuilder) {
    this.shared.getPostTitle().subscribe(res => {
      this.postTitle = res;
    });
    this.shared.getPostId().subscribe(res => {
      this.postid = res;
    });
    this.api.getPostComments(this.postid).subscribe(res => {
      this.comments = res.data;
    });
  }

  ngOnInit() {
    this.commentForm = this.formbuilder.group({
      commentText: new FormControl('',[])
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.commentForm.controls; }

  addComment() {
    if (this.f.commentText.value != null) {
      this.api.createComment(this.f.commentText.value, this.postid).subscribe(res => {
        this.comments.push(res.data);
      });
    }
    this.f.commentText.setValue('');
  }
}
