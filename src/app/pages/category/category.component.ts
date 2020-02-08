import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  color='green';
 constructor(private router: Router,private sharedata:SharedDataService) { }
  cat=[
    'Css','Css3','Javascript','Node','Php','Python','R','React','Montressocss'
  ]
  ngOnInit() {
  }

  get_blogs(cat){
    console.log(cat);
    this.sharedata.setCategory(cat);
    this.router.navigate(['blogs/'+cat]);
  }
  // getSmartphones() {
  //   this.api.getSmartphone()
  //     .subscribe(data => {
  //       for (const d of (data as any)) {
  //         this.smartphone.push({
  //           name: d.name,
  //           price: d.price
  //         });
  //       }
  //       console.log(this.smartphone);
  //     });
  // }
}
