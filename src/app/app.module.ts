import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';

import { MatFormFieldModule,
   MatInputModule,
    MatCardModule,
     MatButtonModule,
      MatToolbarModule,
       MatDialogModule,
        MatTableModule,
        MatMenuModule,
         MatIconModule,
          MatProgressSpinnerModule,
          MatTabsModule,
          MatPaginatorModule,
          MatTreeModule,
          MatTooltipModule,
          MatSortModule,
          MatSnackBarModule,
          MatSlideToggleModule,
          MatSliderModule,
          MatSidenavModule,
          MatSelectModule,
          MatRippleModule,
          MatRadioModule,
          MatProgressBarModule,
          MatNativeDateModule,
          MatListModule,
          MatGridListModule,
          MatExpansionModule,
          MatDividerModule,
          MatDatepickerModule,
          MatStepperModule,
          MatChipsModule,
          MatCheckboxModule,
          MatButtonToggleModule,
          MatBottomSheetModule,
          MatBadgeModule,
          MatAutocompleteModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule, FormControl } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './pages/banners/banners.component';
import { BannerPanelComponent } from './banner-panel/banner-panel.component';
import { EditorComponent } from './editor/editor.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { BannerEditorComponent } from './banner-editor/banner-editor.component';
@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    ToolbarComponent,
     FooterComponent,
       BannersComponent,
        BannerPanelComponent,
         EditorComponent,
         CategoryComponent,HomeComponent, NavComponent, ProfileComponent, BannerEditorComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
    BsDatepickerModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
