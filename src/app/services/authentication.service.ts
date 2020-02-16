import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
export interface Token {
  access_token: string,
  refresh_token: string,
  token_type: string,
  expires_in: string
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserTokenSubject: BehaviorSubject<Token>;


  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.currentUserTokenSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('currentUserToken')));

  }

  public getcurrentUserTokenValue(): Token {
    return this.currentUserTokenSubject.value;
  }

  login(username: string, password: string) {
    console.log('is there',username,password);
    const form = new FormData();
    form.append('Grant_type', 'password');
    form.append('Username', username);
    form.append('Password', password);

    return this.http.post<any>(`http://95.216.12.8:91/api/v1/Users/Token`, form)
      .pipe(map(token => {
        // console.log('ok1')
        // console.log('is token',token);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserToken', JSON.stringify(token));
        console.log('is token',token);
        //
        this.currentUserTokenSubject.next(token);
        console.log('ok1');
        return token;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserToken');
    localStorage.removeItem('currentUser');
    this.currentUserTokenSubject.next(null);
  }


}
