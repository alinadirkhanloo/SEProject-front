import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  textEditorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "0",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here…",
    "imageEndPoint": "",
    "toolbar": [
    ["bold", "italic", "underline"],
    ["justifyLeft", "justifyCenter", "justifyRight"],
    ["justifyFull", "indent", "outdent"]
    ]
    }

  htmlContent = '';
  constructor() { }

  ngOnInit() {
  }





}
