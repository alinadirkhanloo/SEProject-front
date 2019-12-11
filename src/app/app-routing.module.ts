import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EditorComponent } from './editor/editor.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { BannersComponent } from './pages/banners/banners.component';


const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'editor',component:EditorComponent},
{path:'category',component:BannersComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
