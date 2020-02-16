import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private user: User;
  loading = false;
  submitted = false;
  error = '';
  showSpinner = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private sharedData: SharedDataService, private api: ApiService) {
    this.user = null;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // repassword: ['', [Validators.required, Validators.minLength(6)]],
      birthday: new FormControl('2020-02-10', []),
      gender: new FormControl(1, []),
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.showSpinner = 'block';
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.showSpinner = '';
      return;
    }
    this.user = this.registerForm.value;
    console.log(this.f.userName.value, this.f.password.value);
    this.api.createUser(this.user).subscribe(
      data => {
        if (data.isSuccess) {
          console.log('data=', data);
          this.loading = true;
          // this.sharedData.setcurrentUserValue(data.data);
          localStorage.setItem('currentUser', JSON.stringify(data.data));
          this.sharedData.setUserId(data.data.id);
          console.log('local storage in login is ok');
          this.authenticationService.login(this.f.userName.value, this.f.password.value).pipe(first())
            .subscribe(
              data => {
                console.log('token r', data);
              });
          this.showSpinner = '';
          alert('SUCCESS!! :-)\n\n' + data.message);
          this.router.navigate(['/home']);
        } else {
          console.log(data);
          this.error = data.message;
          this.loading = false;
          this.showSpinner = '';
        }
      });

    // display form values on success
    // this.sharedData.setLoggedIn(true);
  }


}
