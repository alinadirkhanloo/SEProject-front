import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { Employe } from '../model/employe.model';
import { Favorite } from '../model/favorites.model';
import { Follower } from '../model/follower.model';
import { Post } from '../model/post.model';
import { User } from '../model/user.model';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  id: number;
  httpOptions = null;
  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }


  // Category

  getAllCategory() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Categories/Get`);
  }

  getAllMainCategory() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Categories/GetAllMainCat`);
  }

  getAllMainCategoryWithSub() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Categories/GetCategoryWithSub`);
  }

  getGetAllByCatId(id: string) {
    return this.http.get<Category[]>(`http://95.216.12.8:91/api/v1/Categories/GetAllByCatId`,
      {
        params: new HttpParams().set('id', id)
      });
  }

  getCategory(id: number) {
    return this.http.get<Category>(`http://95.216.12.8:91/api/v1/Categories/Get/` + id);
  }

  updateCategory(id: string, cat: Category) {
    return this.http.put<Category>(`http://95.216.12.8:91/api/v1/Categories/Update`, cat,
      {
        params: new HttpParams().set('id', id)
      });
  }

  DeleteCategory(id: number) {
    return this.http.delete<Category>(`http://95.216.12.8:91/api/v1/Categories/Delete/` + id);
  }

  createCategoy(cat: Category) {
    return this.http.post<Category>(`http://95.216.12.8:91/api/v1/Categories/Create`, cat);
  }

  // Comments

  getAllComment() {
    return this.http.get<Comment[]>(`http://95.216.12.8:91/api/v1/Comments/Get`);
  }

  getCommentByID(id: number) {
    return this.http.get<Comment>(`http://95.216.12.8:91/api/v1/Comments/Get/` + id);
  }

  getPostComments(id: string) {
    return this.http.get<Comment[]>(`http://95.216.12.8:91/api/v1/Comments/GetPostComments`,
      {
        params: new HttpParams().set('id', id)
      });
  }

  updateComment(id: string, comment: Comment) {
    return this.http.put<Comment>(`http://95.216.12.8:91/api/v1/Comments/Update`, comment,
      {
        params: new HttpParams().set('id', id)
      });
  }

  DeleteComment(id: number) {
    return this.http.delete<Comment>(`http://95.216.12.8:91/api/v1/Comments/Delete/` + id);
  }

  createComment(comment: Comment) {
    return this.http.post<Comment>(`http://95.216.12.8:91/api/v1/Comments/Create`, comment);
  }

  // Employes

  getAllEmployes() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Employs/Get`);
  }

  getEmployeByID(id: number) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Employs/Get/` + id);
  }

  updateEmploye(id: string, employe: Employe) {
    return this.http.put<Employe>(`http://95.216.12.8:91/api/v1/Employs/Update`, employe,
      {
        params: new HttpParams().set('id', id)
      });
  }

  DeleteEmploye(id: number) {
    return this.http.delete<any>(`http://95.216.12.8:91/api/v1/Employs/Delete/` + id);
  }

  createEmploye(employe: Employe) {
    this.httpOptions = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getcurrentUserTokenValue().access_token}`
    });
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Employs/Create`, employe, { headers: this.httpOptions });
  }

  // Favorites

  getAllFavorites() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Favorites/Get`);
  }

  DeleteFavorite(id: number) {
    return this.http.delete<any>(`http://95.216.12.8:91/api/v1/Favorites/Delete/` + id);
  }

  createFavorite(favorite: Favorite) {
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Favorites/Create`, favorite);
  }


  // Followers

  getAllFollowers() {
    return this.http.get<Follower[]>(`http://95.216.12.8:91/api/v1/Followers/Get`);
  }

  DeleteFollower(id: number) {
    return this.http.delete<any>(`http://95.216.12.8:91/api/v1/Followers/Delete/` + id);
  }

  createFollower(follower: Follower) {
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Followers/Create`, follower);
  }


  // Posts

  getAllPosts() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/Get`);
  }

  getPostByID(id: number) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/Get/` + id);
  }

  getAllPostsByCatId(id: string, to: string) {
    const params = new HttpParams({
      fromObject: {
        id: id,
        to: to,
      }
    });
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/GetAllByCatId`, { params });
  }

  getSimilarPost(id: string) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/GetSimilar/`, {
      params: new HttpParams().set('id', id)
    });
  }

  getPostByUserID(id: string) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/GetByUserId`, {
      params: new HttpParams().set('id', id)
    });
  }

  getCustomPost(type: string, count: string) {
    const params = new HttpParams({
      fromObject: {
        type: type,
        count: count,
      }
    });
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/GetCustom`, { params });
  }

  searchPost(str: string) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/Search`, {
      params: new HttpParams().set('str', str)
    });
  }

  updatePost(id: string, post: Post) {
    return this.http.put<any>(`http://95.216.12.8:91/api/v1/Posts/Update`, post,
      {
        params: new HttpParams().set('id', id)
      });
  }

  DeletePost(id: number) {
    return this.http.delete<any>(`http://95.216.12.8:91/api/v1/Posts/Delete/` + id);
  }

  createPosts(post: Post) {
    this.httpOptions = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getcurrentUserTokenValue().access_token}`
    });
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Posts/Create`, post, { headers: this.httpOptions });
  }

  // Users

  getAllUsers() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Users`);
  }

  getUserById(id: number) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Users/` + id);
  }

  getUserInfo() {
    this.httpOptions = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getcurrentUserTokenValue().access_token}`
    });
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Users/GetUserInfo`, { headers: this.httpOptions });
  }

  updateUser(id: string, user: User) {
    return this.http.put<any>(`http://95.216.12.8:91/api/v1/Users`, user,
      {
        params: new HttpParams().set('id', id)
      });
  }

  DeleteUser(id: string) {
    return this.http.delete<any>(`http://95.216.12.8:91/api/v1/Users`, {
      params: new HttpParams().set('id', id)
    });
  }

  createUser(user: User) {
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Users/Create`, user, { headers: getHeaders });
  }


}
