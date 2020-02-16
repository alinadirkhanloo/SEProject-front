import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
export interface Banner {
  title: string;
  text: string;
  time: string;
  type: number;
  id: number;
  userFullName: string;
}

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  banner: Banner;
  banners =  [
    {
      title: 'title',
      text: 'text',
      time: "2020-02-13T12:25:24.389Z",
      type: 0,
      id: 0,
      userFullName: 'ali'
    }
  ]
  types = ['تبلیغات', 'اطلاعیه', 'استخدامی'];

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getAllEmployes().subscribe(res => {
    //   this.banners = res.data;
    // });
  }

  getBanner(index) {
    this.banner = this.banners[index];
  }
}
