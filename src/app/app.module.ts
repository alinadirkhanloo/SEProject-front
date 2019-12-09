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
          MatTabsModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './banners/banners.component';
import { BannerPanelComponent } from './banner-panel/banner-panel.component';
import { EditorComponent } from './editor/editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    ToolbarComponent,
     FooterComponent,
       BannersComponent,
        BannerPanelComponent,
         EditorComponent
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
    NgxEditorModule,
    FormsModule,
    BsDatepickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
