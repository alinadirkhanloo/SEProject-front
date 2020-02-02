import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BannerPanelComponent } from './pages/banner-panel/banner-panel.component';
import { BannersComponent } from './pages/banners/banners.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditorComponent } from './pages/editor/editor.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'banner-panel',component:BannerPanelComponent},
{path:'banners',component:BannersComponent},
{path:'',component:HomeComponent},
{path:'category',component:CategoryComponent},
{path:'profile',component:ProfileComponent},
{path:'editor',component:EditorComponent},
{path:'blog',component:BlogComponent},
{path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
