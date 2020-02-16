import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  showSpinner = '';
  constructor(
    private sharedData: SharedDataService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.getcurrentUserTokenValue()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Grant_type: new FormControl('password', []),
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  login() {
    this.submitted = true;
    this.showSpinner = 'block';
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.Username.value, this.f.Password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.sharedData.setLoggedIn(true);
          this.showSpinner = '';
          this.api.getUserInfo().subscribe(res => {
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            this.sharedData.setUserId(res.data.id);
            console.log('current user', localStorage.getItem('currentUser'));
          });
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
          this.showSpinner = '';
        });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
