import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  { path: 'my-posts', component: MyPostsComponent, canActivate:[AuthGuard]},
  { path: 'create-post', component: CreatePostComponent,canActivate:[AuthGuard] },
  { path: 'all-posts', component: AllPostsComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
