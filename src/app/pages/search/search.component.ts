import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  resullts: Post[];
  error = '';
  constructor(private formbilder: FormBuilder, private api: ApiService) {
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
    this.api.searchPost(this.f.query.value).subscribe(posts => {
      if (posts.isSuccess) {
        this.resullts = posts.data;
        console.log('okk',posts);
        return;
      }
      this.error = posts.message;
    });

  }
}
