import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public isLoggedIn: BehaviorSubject<boolean>;
  public catName: BehaviorSubject<string>;
  public catId: BehaviorSubject<number>;
  public postId: BehaviorSubject<number>;
  public postTitle: BehaviorSubject<string>;
  public userId: BehaviorSubject<number>;
  public currentUser: BehaviorSubject<User>;
  constructor() {
    this.isLoggedIn = new BehaviorSubject(false);
    this.catName = new BehaviorSubject('');
    this.catId = new BehaviorSubject(null);
    this.postId = new BehaviorSubject(null);
    this.currentUser = new BehaviorSubject<User>(null);
    this.userId = new BehaviorSubject(null);
    this.postTitle = new BehaviorSubject('');
  }


  getUserId() {
    return this.userId.asObservable();
  }

  setUserId(id) {
    this.userId.next(id);
  }

  setPostId(id) {
    this.postId.next(id);
  }

  getPostId() {
    return this.postId.asObservable();
  }

  setLoggedIn(bool) {
    this.isLoggedIn.next(bool);
  }


  getLoggedStatus() {
    return this.isLoggedIn.asObservable();
  }

  setPostTitle(title) {
    this.postTitle.next(title);
  }
  getPostTitle() {
    return this.postTitle.asObservable();
  }

  setCategory(catName, id) {
    this.catName.next(catName);
    this.catId.next(id);
  }
  getCategoryName() {
    return this.catName.asObservable();
  }
  getCategoryId() {
    return this.catId.asObservable();
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
