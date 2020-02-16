import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments:[];
  constructor() { }

  ngOnInit() {

  }

}
