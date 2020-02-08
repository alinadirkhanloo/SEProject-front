import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }
  isHome() {
    let temp = this.location.prepareExternalUrl(this.location.path());
    if (temp.charAt(0) === '#') {
      temp = temp.slice(1);
    }
    if (temp === '/home') {
      return true;
    } else {
      return false;
    }
  }
}
