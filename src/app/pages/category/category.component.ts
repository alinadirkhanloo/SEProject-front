import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  color = 'green';
  constructor(private router: Router, private sharedata: SharedDataService, private api: ApiService) { }
  mainCat = [];
  subCat = [];
  ngOnInit() {
    this.api.getAllMainCategoryWithSub()
      .subscribe(res => {
        console.log('cat', res);
        this.mainCat = res.data;
      });
  }

  get_blogs(name, id) {
    console.log(name, id);
    this.sharedata.setCategory(name,id);
    this.router.navigate(['blogs/' + name]);
  }
}
