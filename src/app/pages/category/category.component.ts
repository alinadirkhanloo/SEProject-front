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
  subCat=[];
  ngOnInit() {
    this.api.getAllMainCategory()
      .subscribe(data => {
        this.mainCat = data;
      });
  }

  get_blogs(cat) {
    console.log(cat);
    this.sharedata.setCategory(cat);
    this.router.navigate(['blogs/' + cat]);
  }
}
