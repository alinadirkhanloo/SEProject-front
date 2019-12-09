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
import { AdvertiseComponent } from './advertise/advertise.component';
import { BannersComponent } from './banners/banners.component';
import { BannerPanelComponent } from './banner-panel/banner-panel.component';
@NgModule({
  declarations: [
    AppComponent,LoginComponent, ToolbarComponent, FooterComponent, AdvertiseComponent, BannersComponent, BannerPanelComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
