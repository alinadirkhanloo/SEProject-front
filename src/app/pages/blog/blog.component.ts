import { Component, OnInit } from '@angular/core';

export interface Blog{
  title:string,
  body:string,
  date:string,
  img:string,
  owner:string
}



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
blog={
  title:'قسمت دوم کامران تفتی',
  body:'قسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودرویی شاید در صداسیما کمی دور از ذهن بود ولی شبکه نسیم جزو شبکه هایی است که به علاقه مندان حوزه خودرو و ماشین احترام گذاشته است و این مسابقه پرهیجان را تقدیم علاقه مندان کرده است.',
  date:'1398/02/11',
  img:'full-screen-image-3.jpg',
  owner:'ali'
};

  constructor() { }

  ngOnInit() {
  }

}