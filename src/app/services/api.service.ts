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
    if (this.auth.getcurrentUserTokenValue()) {
      this.httpOptions = new HttpHeaders({
        Authorization: `Bearer ${this.auth.getcurrentUserTokenValue().access_token}`
      });
    }
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
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Comments/GetPostComments/` + id);
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

  createComment(comment: string, id: number) {

    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Comments/Create`, {
      text: comment,
      postId: id
    }, { headers: this.httpOptions });
  }

  // Employes

  getAllEmployes() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Employs/Get`);
  }

  getEmployeByID(id: number) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Employs/Get/` + id);
  }

  getEmployeByUserID(id: number) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Employs/GetByUserId/` + id);
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

  createEmploye(banTitle: string, banText: string, banType: number) {
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Employs/Create`, {
      title: banTitle,
      text: banText,
      type: banType
    }, { headers: this.httpOptions });
  }

  // Favorites

  getAllFavorites() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Favorites/Get`, { headers: this.httpOptions });
  }

  DeleteFavorite(id: number) {
    return this.http.delete<any>(`http://95.216.12.8:91/api/v1/Favorites/Delete/` + id);
  }

  createFavorite(id: number) {
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Favorites/Create/`, { postId: id }, { headers: this.httpOptions });
  }


  // Followers

  getAllFollowers() {

    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Followers/Get`, { headers: this.httpOptions });
  }

  DeleteFollower(id: number) {
    return this.http.delete<any>(`http://95.216.12.8:91/api/v1/Followers/Delete/` + id);
  }

  createFollower(id) {

    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Followers/Create`, {
      followerId: String(id),
    }, { headers: this.httpOptions });
  }


  // Posts

  getAllPosts() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/Get`);
  }

  getPostByID(id: number) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/Get/` + id);
  }

  getAllPostsByCatId(id: number, to: number) {
    const params = new HttpParams({
      fromObject: {
        to: String(to),
      }
    });
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/GetAllByCatId/` + id, { params });
  }

  getSimilarPost(id: string) {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/GetSimilar/` + id);
  }

  getPostByUserID(id: number) {

    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Posts/GetByUserId/` + id);
  }

  getCustomPost(type: number, count: number) {
    const params = new HttpParams({
      fromObject: {
        type: String(type),
        count: String(count),
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


  getAllBanners() {
    return this.http.get<any>(`http://95.216.12.8:91/api/v1/Banners/Get`);
  }

  createTag(id: number, tag: string[]) {
    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Tags/AddTag`, {
      postId:id,tagName:tag
    }, { headers: this.httpOptions });

  }

}
