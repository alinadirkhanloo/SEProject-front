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
import { BlogsComponent } from './pages/category/blogs/blogs.component';
import { AuthGuard } from './helpers/auth.guard';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { SearchComponent } from './pages/search/search.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ErrorComponent } from './pages/error/error.component';

// canLoad: [RandomGuard]
const routes: Routes = [
{path:'admin',component:AdminPanelComponent,canActivate: [AuthGuard]},
{path:'login',component:LoginComponent},
{path:'banner-panel',component:BannerPanelComponent,canActivate: [AuthGuard]},
{path:'banners',component:BannersComponent},
{path:'home',component:HomeComponent},
{path:'blogs/:category',component:BlogsComponent},
{path:'category',component:CategoryComponent},
{path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
{path:'editor',component:EditorComponent ,canActivate: [AuthGuard]},
{path:'blog',component:BlogComponent,canActivate: [AuthGuard]},
{path:'register',component:RegisterComponent},
{path:'search',component:SearchComponent},
{path:'comments',component:CommentsComponent,canActivate: [AuthGuard]},
{path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
