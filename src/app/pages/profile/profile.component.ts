import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { User } from 'src/app/model/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { isDateValid } from 'ngx-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faceUser: User;
  proForm: FormGroup;
  fav = [];
  posts = [];
  banners = [];
  following = [];
  types = ['تبلیغات', 'اطلاعیه', 'استخدامی'];
  showFollowing = false;
  userid = null;
  constructor(
    private shData: SharedDataService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private api: ApiService,
    private shared: SharedDataService) {
    this.faceUser = JSON.parse(localStorage.getItem('currentUser'));
    this.shData.getUserId().subscribe(res => {
      this.userid = res;
    });
    if (this.faceUser.id == this.userid) {
      this.showFollowing = true;
    }
    this.api.getPostByUserID(this.faceUser.id).subscribe(res => {
      this.posts = res.data;
    });
    this.api.getAllFavorites().subscribe(res => {
      this.fav = res.data;
      console.log('fav',this.fav);
    });
    this.api.getEmployeByUserID(this.faceUser.id).subscribe(res => {
      this.banners = res.data;
    });
    this.api.getAllFollowers().subscribe(res => {
      this.following = res.data;
      console.log('this.faceUser.id', this.following);
    });
  }

  ngOnInit() {
    this.proForm = this.formBuilder.group({
      fullName: new FormControl(this.faceUser.fullName, [Validators.required, Validators.minLength(3)]),
      // userName:  new FormControl(this.faceUser.userName,[Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl(this.faceUser.phoneNumber, [Validators.required, Validators.minLength(11)]),
      email: new FormControl(this.faceUser.email, [Validators.required, Validators.email]),
      birthday: new FormControl(this.faceUser.birthday, [Validators.required]),
    });
  }

  edit() {
    console.log(this.proForm.invalid);
    if (this.proForm.invalid) {
      alert('اطلاعات درست نمیباشد. هیچ فیلدی نباید خالی باقی بماند.');
      return;
    }
    // this.api.updateUser().subscribe(res => {
    //   this.faceUser = res.data;
    // });
  }
  unfollow(id) {
    console.log('unfollow');
    this.api.DeleteFollower(id).subscribe(res => {
      if (res.isSuccess) {
        console.log('deleted');
      }
    });
  }
  deletePost(id) {
    console.log('delete');
    this.api.DeletePost(id).subscribe(res => {
      if (res.isSuccess) {
        console.log('deleted');
      }
    });
  }
  deleteFav(id) {
    console.log('delete');
    this.api.DeleteFavorite(id).subscribe(res => {
      if (res.isSuccess) {
        console.log('deleted');
      }
    });
  }
  deleteBanner(id) {
    console.log('delete');
    this.api.DeleteEmploye(id).subscribe(res => {
      if (res.isSuccess) {
        console.log('deleted');
      }
    });
  }

  getPost(id) {
    this.shared.setPostId(id);
    this.router.navigate(['blog']);
  }
}
