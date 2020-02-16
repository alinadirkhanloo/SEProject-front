import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  @ViewChild('slideshow', { static: false }) slideshow: any;
  imageSources = [];
  posts = [];
  sortBy = 0;
  checked=true;
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private api: ApiService,
    private shared: SharedDataService
  ) {
    this.api.getAllBanners().subscribe(res => {
      for (const i in res.data) {
        this.imageSources.push(res.data[i].image);
      }
    });
    this.api.getCustomPost(1, 10).subscribe(res => {
      this.posts = res.data;
    });
  }

  ngOnInit() {
  }


  loginStatus() {
    return this.auth.getcurrentUserTokenValue();
  }
  getPost(id) {
    this.shared.setPostId(id);
    this.router.navigate(['blog']);
  }

  sort(num) {
    console.log(num);
    this.api.getCustomPost(this.sortBy, 10).subscribe(res => {
      this.posts = res.data;
      console.log('num', num, 'data=', this.posts);
    });
  }

}
