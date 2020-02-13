import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import { TextSelectEvent } from '../blog/text-select.directive';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/model/post.model';


interface SelectionRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}
interface Cat {
  value: number, viewValue: string
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: '',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize'], ['font']
    ]
  };
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  panelOpenState = false;
  bannerForm: FormGroup;



  categories: Cat[] = [];
  public hostRectangle: SelectionRectangle | null;
  private selectedText: string;
  error = '';
  blogForm: FormGroup;
  post: Post;
  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.hostRectangle = null;
    this.selectedText = '';
    this.post = null;
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      shortDescription: new FormControl('', [Validators.required]),
      htmlContent: new FormControl('', [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      timeToRead: new FormControl('', [Validators.required]),
      image: new FormControl('', []),
      // tags: [[]],
    });
    this.api.getAllCategory().subscribe(
      res => {
        // tslint:disable-next-line: forin
        for (const item in res.data) {
          this.categories.push({ value: res.data[item].id, viewValue: res.data[item].name });
        }
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.blogForm.controls; }

  onSubmit() {
    if (this.blogForm.invalid) {
      return;
    }
    // this.blogForm.value.tags = this.tags;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.blogForm.value, null, 4));
    this.post = {
      title: this.f.title.value,
      text: this.f.htmlContent.value,
      shortDescription: this.f.shortDescription.value,
      timeToRead: this.f.timeToRead.value,
      image: this.f.image.value,
      categoryId: this.f.category.value
    };
    this.api.createPosts(this.post).subscribe(
      data => {
        if (data.isSuccess) {
          console.log('post data=', data);
          alert('SUCCESS!! :-)\n\n' + data.message);
        } else {
          console.log(data);
          this.error = data.message;
        }
      },
      error => {
        console.log('error', error);
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

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

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

    return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  public renderRectangles(event: TextSelectEvent): void {

    console.group("Text Select Event");
    console.log("Text:", event.text);
    console.log("Viewport Rectangle:", event.viewportRectangle);
    console.log("Host Rectangle:", event.hostRectangle);
    console.groupEnd();

    // If a new selection has been created, the viewport and host rectangles will
    // exist. Or, if a selection is being removed, the rectangles will be null.
    if (event.hostRectangle) {

      this.hostRectangle = event.hostRectangle;
      this.selectedText = event.text;

    } else {

      this.hostRectangle = null;
      this.selectedText = "";

    }

  }


  // I share the selected text with friends :)
  public shareSelection(): void {

    console.group("Shared Text");
    console.log(this.selectedText);
    console.groupEnd();

    // Now that we've shared the text, let's clear the current selection.
    document.getSelection().removeAllRanges();
    // CAUTION: In modern browsers, the above call triggers a "selectionchange"
    // event, which implicitly calls our renderRectangles() callback. However,
    // in IE, the above call doesn't appear to trigger the "selectionchange"
    // event. As such, we need to remove the host rectangle explicitly.
    this.hostRectangle = null;
    this.selectedText = "";

  }

  s


}
