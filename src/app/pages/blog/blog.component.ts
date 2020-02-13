import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TextSelectEvent } from "./text-select.directive";
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

interface Blog {
  title: string,
  body: string,
  date: string,
  img: string,
  owner: string
}
interface SelectionRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {
  simpleSlider = 40;
  currentRate = 3;
  switchStatus = true;
  public hostRectangle: SelectionRectangle | null;

  private selectedText: string;
  private selection_start = 0;
  private selection_end = 0;

  content = '';



  blog = {
    title: 'قسمت دوم کامران تفتی',
    body: 'قسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودرویی شاید در صداسیما کمی دور از ذهن بود ولی شبکه نسیم جزو شبکه هایی است که به علاقه مندان حوزه خودرو و ماشین احترام گذاشته است و این مسابقه پرهیجان را تقدیم علاقه مندان کرده است.',
    date: '1398/02/11',
    img: 'full-screen-image-3.jpg',
    owner: 'ali'
  };

  constructor(private api: ApiService, private router:Router,private sharedata:SharedDataService) {
    this.hostRectangle = null;
    this.selectedText = '';
    this.content = '<div style="text-align: right;"><span style="color: rgb(0, 0, 0); font-size: 18px; background-color: transparent;">قسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم </span><span style="color: rgb(0, 0, 0); font-size: 18px; background-color: rgb(220, 242, 91)!important;">مسابقه خودرویی دست فرمون</span><span style="color: rgb(0, 0, 0); font-size: 18px; background-color: transparent;"> با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودروییقسمت دوم مسابقه خودرویی دست فرمون با حضور کامران تفنی به احرا در آمد. وجود برنامه های خودرویی شاید در صداسیما کمی دور از ذهن بود ولی شبکه نسیم جزو شبکه هایی است که به علاقه مندان حوزه خودرو و ماشین احترام گذاشته است و این مسابقه پرهیجان را تقدیم علاقه مندان کرده است.</span></div>'

  }

  ngOnInit() {
  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I render the rectangles emitted by the [textSelect] directive.
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
    this.selectedText = '';

  }
  public highlight() {
    //   if (!this.selectedText) {
    //     return;
    //   }
    //   return '<span class="highlightText">' + this.selectedText + '</span>';
    // }
    const selection = window.getSelection();
    const start = selection.anchorOffset;
    const end = selection.focusOffset;
    if (start >= 0 && end >= 0) {
      console.log("start: " + start);
      console.log("end: " + end);
      console.log(this.content.slice(start, end));
    }
  }

  follow(id) {
    this.api.createFollower(id).subscribe(res => {
      if (res.isSuccess) { console.log('its ok'); }
    });
  }
  comments(title) {
    this.sharedata.setPostTitle(title);
    this.router.navigate(['/comments']);
  }

}
