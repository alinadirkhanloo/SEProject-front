import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EditorComponent } from './editor/editor.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { BannersComponent } from './pages/banners/banners.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { BannerPanelComponent } from './banner-panel/banner-panel.component';


const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'banner-panel',component:BannerPanelComponent},
{path:'banners',component:BannersComponent},
{path:'',component:HomeComponent},
{path:'category',component:CategoryComponent},
{path:'profile',component:ProfileComponent},
{path:'editor',component:EditorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
