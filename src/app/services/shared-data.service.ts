import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';
import { Post } from '../model/post.model';
import { Category } from '../model/category.model';
import { Follower } from '../model/follower.model';
import { Favorite } from '../model/favorites.model';
import { Employe } from '../model/employe.model';
import { Comment } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public isLoggedIn: BehaviorSubject<boolean>;
  public category: BehaviorSubject<string>;
  public user: BehaviorSubject<User>;
  public posts: BehaviorSubject<Post[]>;
  public cats: BehaviorSubject<Category[]>;
  public employes: BehaviorSubject<Employe[]>;
  public faceUser: User;
  public post: Post;
  public posty: Post;
  public cat: Category;
  public childCat: Category;
  public comment: Comment;
  public follower: Follower;
  public favor: Favorite;
  public employe: Employe;

  public currentUser: BehaviorSubject<User>;
  constructor() {
    this.isLoggedIn = new BehaviorSubject(false);
    this.category = new BehaviorSubject('');
    this.currentUser = new BehaviorSubject<User>(null);
    // // this.faceUser=new User
    // this.getCommentInf();
    // this.getFollowersInf();
    // // this.favor = this.getFavoriteInf(1);
    // this.getEmployeInf();
    // this.post = this.getPostInf(1);
    // this.getUserInf();
    // this.posts = new BehaviorSubject([this.getPostInf(2), this.getPostInf(3), this.getPostInf(4), this.getPostInf(5)]);
    // this.cats = new BehaviorSubject([this.cat, this.cat, this.cat, this.cat, this.cat]);
    // this.employes = new BehaviorSubject([this.employe, this.employe, this.employe, this.employe, this.employe]);
    this.user = new BehaviorSubject(null);
  }

  getUserInf() {
    this.faceUser = {
      fullName: "علی ندیرخانلو",
      email: "alinadirkhanlo.98@gmail.com",
      gender: 1,
      password: "123456789",
      phoneNumber: "09227098355",
      userName: "jolan",
      birthday: "1377/01/14",
      id: 1,
      comments: [this.comment, this.comment, this.comment],
      employs: [this.employe, this.employe],
      favorites: [this.getFavoriteInf(2), this.getFavoriteInf(4)],
      followers: [this.follower, this.follower, this.follower],
      posts: [this.post, this.post],
    }

  }
  getPostInf(id: number) {
    this.posty = {
      title: "آموزش انگولار",
      description: "انگولار یک فریم‌ورک جاوا اسکریپت است که در سال ۲۰۰۹ توسط میسکو هوری و آدام آبرونز ارائه شد و بعد توسط گوگل توسعه داده شد. انگولار یک فریم‌ورک ساخت‎یافته برای ساخت وب اپلیکیشن‌های پویا می‌باشد. یکی از دلایل استفاده از انگولار در بین برنامه‌نویسان، تسریع در پیاده‌سازی پروژه‌های برنامه‌نویسی است. انگولار یک فریم‌ورک مبتنی بر MVC است که از Ajax نیز استفاده کرده است. این فریم‎ورک موجب کاهش مقدار کدنویسی (و در نتیجه افزایش سرعت تولید برنامه‌ها) شده است. امروزه یکی از علت‌های استفاده از انگولار توسعه و قدرتمندتر کردن برنامه‌های تک‌ صفحه‌ای یا SPA هستند لذا می‌توان در پروژه‌های بزرگ و کوچک از فریم‌ورک انگولار استفاده بهینه را برد. برنامه‌های تک صفحه‌ای مانع از بارگذاری مجدد کل صفحه می‌شوند و به این شکل سرعت مشاهده صفحات وب را بالاتر می‌برند.",
      categoryName: "angular",
      authorFullName: "علی ندیرخانلو",
      summery: "انگولار یک فریم‌ورک جاوا اسکریپت است که در سال ۲۰۰۹ توسط میسکو هوری و آدام آبرونز ارائه شد و بعد توسط گوگل توسعه داده شد. انگولار یک فریم‌ورک ساخت‎یافته برای ساخت وب اپلیکیشن‌های پویا می‌باشد. یکی از دلایل استفاده از انگولار در بین برنامه‌نویسان، تسریع در پیاده‌سازی پروژه‌های برنامه‌نویسی است. انگولار یک فریم‌ورک مبتنی بر MVC است که از Ajax نیز استفاده کرده است. این فریم‎ورک موجب کاهش مقدار کدنویسی (و در نتیجه افزایش سرعت تولید برنامه‌ها) شده است. امروزه یکی از علت‌های استفاده از انگولار توسعه و قدرتمندتر کردن برنامه‌های تک‌ صفحه‌ای یا SPA هستند لذا می‌توان در پروژه‌های بزرگ و کوچک از فریم‌ورک انگولار استفاده بهینه را برد. برنامه‌های تک صفحه‌ای مانع از بارگذاری مجدد کل صفحه می‌شوند و به این شکل سرعت مشاهده صفحات وب را بالاتر می‌برند.",
      view: 125,
      rank: 4.5,
      id: id,
      time: "۱۰ دقیقه",
      childCategories: [this.cat, this.cat],
      comments: [this.comment, this.comment],
    }
    return this.posty
  }
  getCommentInf() {
    this.comment = {
      text: "خیلی خوب بود. ممنون",
      postId: 1,
      userId: 1,
      time: "۱۰ دقیقه",
      id: 1,
      userFullName: ''
    }
  }
  getFollowersInf() {
    this.follower = {
      userFullName: "mahdi",
      userId: 2,
      id: 1
    }
  }
  getFavoriteInf(id: number) {
    this.favor = {
      postTitle: "Angular Exeptions" + id,
      postId: id,
      id: 1
    }
    return this.favor
  }
  getEmployeInf() {
    this.employe = {
      title: "استخدام برنامه نویس پایتون",
      text: "ما به یک برنامه نویس پایتون نیازمندیم. ادرس :---------------",
      time: "1398/10/24,20:30",
      userFullName: 1,
      id: 1
    }
  }


  getUser() {
    return this.user.asObservable();
  }
  getPosts() {
    return this.posts.asObservable();
  }
  getEmployes() {
    return this.employes.asObservable();
  }

  getCategories() {
    return this.cats.asObservable();
  }

  setLoggedIn(bool) {
    this.isLoggedIn.next(bool);
  }
  getLoggedStatus() {
    return this.isLoggedIn.asObservable();
  }

  setCategory(cat) {
    this.category.next(cat);
  }
  getCategory() {
    return this.category.asObservable();
  }

  setcurrentUserValue(user: User) {
    const us: User = user;
    this.currentUser.next(us);
    console.log(this.currentUser);
  }
  getcurrentUserValue() {
    return this.currentUser.asObservable();
  }
}
