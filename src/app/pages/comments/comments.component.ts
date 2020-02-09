import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments:Comment[];
  constructor() { }

  ngOnInit() {
    this.comments=[{
      text:"بسیار عالی بود استفاده کردیم",
      userFullName:"علی ندیرخانلو",
      time:"1377/11/18",
      userId:1,
      postId:1,
      id:1
    },
    {
      text:"بسیار عالی بود استفاده کردیم",
      userFullName:"علی ندیرخانلو",
      time:"1377/11/18",
      userId:2,
      postId:1,
      id:2
    },
    {
      text:"بسیار عالی بود استفاده کردیم",
      userFullName:"علی ندیرخانلو",
      time:"1377/11/18",
      userId:3,
      postId:1,
      id:3
    }
  ]
  }

}
