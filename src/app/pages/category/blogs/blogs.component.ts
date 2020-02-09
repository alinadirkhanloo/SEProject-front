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
  cat_name: string;
  constructor(private sharedata: SharedDataService,private api:ApiService) { }

  ngOnInit() {
    this.sharedata.getCategory().subscribe(res => {
      this.cat_name = res;
    });
    // this.api.getCategory
  }

  test() {
    console.log(this.cat_name);
  }

}
