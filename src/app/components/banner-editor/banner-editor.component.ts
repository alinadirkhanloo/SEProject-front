import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Employe } from 'src/app/model/employe.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

interface Type {
  value: number, viewValue: string
}

@Component({
  selector: 'app-banner-editor',
  templateUrl: './banner-editor.component.html',
  styleUrls: ['./banner-editor.component.scss']
})
export class BannerEditorComponent implements OnInit {
  error = '';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  panelOpenState = false;
  bannerForm: FormGroup;



  types: Type[] = [
    { value: 0, viewValue: 'تبلیغات' },
    { value: 1, viewValue: 'اطلاعیه' },
    { value: 2, viewValue: 'استخدامی' }
  ];
  employe: Employe;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.employe = null;
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  ngOnInit() {
    this.bannerForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      // sumery: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      // tags: [[]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.bannerForm.controls; }

  onSubmit() {
    if (this.bannerForm.invalid) {
      return;
    }

    // this.sharedData.setLoggedIn(true);
    // this.bannerForm.value.tags = this.tags;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bannerForm.value, null, 4));
    this.employe = {
      text: this.f.text.value,
      title: this.f.title.value,
      type:this.f.type.value
    };
    this.api.createEmploye(this.employe).subscribe(
      data => {
        if (data.isSuccess) {
          console.log('emp data=', data);
          alert('SUCCESS!! :-)\n\n' + data.message);
          this.router.navigate(['/banners']);
        } else {
          console.log(data);
          this.error = data.message;
        }
      },
      error => {
        console.log('error',error);
        this.error = error.error.Message;
      });
  }


  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.tags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagCtrl.setValue(null);
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}
