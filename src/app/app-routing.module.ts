import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EditorComponent } from './editor/editor.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { BannersComponent } from './pages/banners/banners.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'editor',component:EditorComponent},
{path:'banners',component:BannersComponent},
{path:'home',component:HomeComponent},
{path:'category',component:CategoryComponent},
{path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
