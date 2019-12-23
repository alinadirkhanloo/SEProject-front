import { Component, OnInit } from '@angular/core';
export interface Banner{
  title:string;
  body:string;
  summary:string;
  date:Date;
}

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  banner:Banner;
  banners=[
    {
      title:'آموزش و ترفند ها',
      body:'با واحد های vh  و vw می توانیم عناصر صفحه را متناسب با محدوده نمایش کاربر , بدون استفاده از جاوا اسکریپت نمایش بدهیم. هنگام ایجاد صفحات رسپاسیو بیشتر از واحد درصد (%) استفاده میکنیم , اما واحد درصد (%) اندازه ها را بر حسب نزدیک ترین والد مشخص میکند. شاید ما بخواهیم سایز یک قسمت رو بر حسب سایز پنجره ی مرورگر (قسمت قابل رویت مرورگر) مشخص کنیم . اینجا دو واحد اندازه گیری vw و vh به کمک ما می آیند .',
      summary:'در این پست با 4 واحد اندازه گیری بسیار جدید آشنا خواهیم شد که میتواند بسیاری از مشکلاتی که تاکنون در طراحی وب سایت به صورت ریسپانسیو داشته ایم برطرف شود .',
      date:new Date(),
      tags:['java','python']

    },
    {
      title:'آموزش و ترفند ها',
      body:'با واحد های vh  و vw می توانیم عناصر صفحه را متناسب با محدوده نمایش کاربر , بدون استفاده از جاوا اسکریپت نمایش بدهیم. هنگام ایجاد صفحات رسپاسیو بیشتر از واحد درصد (%) استفاده میکنیم , اما واحد درصد (%) اندازه ها را بر حسب نزدیک ترین والد مشخص میکند. شاید ما بخواهیم سایز یک قسمت رو بر حسب سایز پنجره ی مرورگر (قسمت قابل رویت مرورگر) مشخص کنیم . اینجا دو واحد اندازه گیری vw و vh به کمک ما می آیند .',
      summary:'در این پست با 4 واحد اندازه گیری بسیار جدید آشنا خواهیم شد که میتواند بسیاری از مشکلاتی که تاکنون در طراحی وب سایت به صورت ریسپانسیو داشته ایم برطرف شود .',
      date:new Date(),
      tags:['java','python']


    },
    {
      title:'آموزش و ترفند ها',
      body:'با واحد های vh  و vw می توانیم عناصر صفحه را متناسب با محدوده نمایش کاربر , بدون استفاده از جاوا اسکریپت نمایش بدهیم. هنگام ایجاد صفحات رسپاسیو بیشتر از واحد درصد (%) استفاده میکنیم , اما واحد درصد (%) اندازه ها را بر حسب نزدیک ترین والد مشخص میکند. شاید ما بخواهیم سایز یک قسمت رو بر حسب سایز پنجره ی مرورگر (قسمت قابل رویت مرورگر) مشخص کنیم . اینجا دو واحد اندازه گیری vw و vh به کمک ما می آیند .',
      summary:'در این پست با 4 واحد اندازه گیری بسیار جدید آشنا خواهیم شد که میتواند بسیاری از مشکلاتی که تاکنون در طراحی وب سایت به صورت ریسپانسیو داشته ایم برطرف شود .',
      date:new Date(),
      tags:['java','python']


    },
    {
      title:'آموزش و ترفند ها',
      body:'با واحد های vh  و vw می توانیم عناصر صفحه را متناسب با محدوده نمایش کاربر , بدون استفاده از جاوا اسکریپت نمایش بدهیم. هنگام ایجاد صفحات رسپاسیو بیشتر از واحد درصد (%) استفاده میکنیم , اما واحد درصد (%) اندازه ها را بر حسب نزدیک ترین والد مشخص میکند. شاید ما بخواهیم سایز یک قسمت رو بر حسب سایز پنجره ی مرورگر (قسمت قابل رویت مرورگر) مشخص کنیم . اینجا دو واحد اندازه گیری vw و vh به کمک ما می آیند .',
      summary:'در این پست با 4 واحد اندازه گیری بسیار جدید آشنا خواهیم شد که میتواند بسیاری از مشکلاتی که تاکنون در طراحی وب سایت به صورت ریسپانسیو داشته ایم برطرف شود .',
      date:new Date(),
      tags:['java','python']


    },
    {
      title:'آموزش و ترفند ها',
      body:'با واحد های vh  و vw می توانیم عناصر صفحه را متناسب با محدوده نمایش کاربر , بدون استفاده از جاوا اسکریپت نمایش بدهیم. هنگام ایجاد صفحات رسپاسیو بیشتر از واحد درصد (%) استفاده میکنیم , اما واحد درصد (%) اندازه ها را بر حسب نزدیک ترین والد مشخص میکند. شاید ما بخواهیم سایز یک قسمت رو بر حسب سایز پنجره ی مرورگر (قسمت قابل رویت مرورگر) مشخص کنیم . اینجا دو واحد اندازه گیری vw و vh به کمک ما می آیند .',
      summary:'در این پست با 4 واحد اندازه گیری بسیار جدید آشنا خواهیم شد که میتواند بسیاری از مشکلاتی که تاکنون در طراحی وب سایت به صورت ریسپانسیو داشته ایم برطرف شود .',
      date:new Date(),
      tags:['java','python']
    },
  ]

  constructor() { }

  ngOnInit() {

  }

  getBanner(index){
    this.banner=this.banners[index]
  }
}
