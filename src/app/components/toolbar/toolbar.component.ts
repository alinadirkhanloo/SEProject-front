import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }

  loginStatus() {
    if(this.auth.getcurrentUserValue()){
      return true
    }else{
      return false
    }

  }



}
