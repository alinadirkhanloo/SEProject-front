import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  color = 'warn';
  checked = false;
  disabled = false;
  catName: string;
  catId = null;
  constructor(private sharedata: SharedDataService, private api: ApiService) { }
  posts = [];
  ngOnInit() {
    this.sharedata.getCategoryName().subscribe(res => {
      this.catName = res;
    });
    this.sharedata.getCategoryId().subscribe(res => {
      this.catId = res;
    });
    console.log(this.catName, this.catId)
    this.api.getAllPostsByCatId(this.catId, 10).subscribe(res => {
      this.posts = res.data;
    });
  }

  test() {
    console.log(this.catName);
  }

}
