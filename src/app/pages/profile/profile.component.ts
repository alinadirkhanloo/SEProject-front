import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { User } from 'src/app/model/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { isDateValid } from 'ngx-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faceUser: User;
  proForm: FormGroup;
  constructor(
    private shData: SharedDataService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private api: ApiService) {
      console.log('dd',localStorage.getItem('currentUser'));
      console.log('ll',JSON.parse(localStorage.getItem('currentUser')));
      this.faceUser=JSON.parse(localStorage.getItem('currentUser'));

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
    console.log(this.proForm.invalid)
  }

}
