import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  posts:[];
  error = '';
  constructor(private formbilder: FormBuilder, private api: ApiService,
    private router: Router, private shared: SharedDataService) {
  }

  ngOnInit() {
    this.searchForm = this.formbilder.group({
      query: new FormControl('', [Validators.required])
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.searchForm.controls; }

  search() {
    if (this.searchForm.invalid) {
      return;
    }
    this.api.searchPost(this.f.query.value).subscribe(res => {
      if (res.isSuccess) {
        this.posts = res.data;
        console.log('okk', res);
        return;
      }
      this.error = res.message;
    });

  }

  getPost(id) {
    this.shared.setPostId(id);
    this.router.navigate(['blog']);
  }
}
