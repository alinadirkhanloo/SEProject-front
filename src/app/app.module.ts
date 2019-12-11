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
          MatPaginatorModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './banners/banners.component';
import { BannerPanelComponent } from './banner-panel/banner-panel.component';
import { EditorComponent } from './editor/editor.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    ToolbarComponent,
     FooterComponent,
       BannersComponent,
        BannerPanelComponent,
         EditorComponent,
         CategoryComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FormsModule,
    BsDatepickerModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
