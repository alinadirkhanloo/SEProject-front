import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  inputs:[`darkmode`]
})
export class LoginComponent implements OnInit {

  constructor(private sharedData:DataSharingService) { }

  ngOnInit() {
    console.log(this.sharedData.darkmode)
  }

}
