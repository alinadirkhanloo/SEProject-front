import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private shared: SharedDataService) { }

  ngOnInit() {
  }

  loginStatus() {
    return this.auth.getcurrentUserTokenValue();


  }
  logout() {
    this.shared.setLoggedIn(true);
    this.auth.logout();
  }



}
