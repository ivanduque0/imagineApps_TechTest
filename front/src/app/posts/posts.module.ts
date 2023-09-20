import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AuthGuard } from '../auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CreatePostDialog } from './createPostDialog.component';



@NgModule({
  providers:[AuthGuard],
  declarations: [
    MyPostsComponent,
    CreatePostComponent,
    AllPostsComponent,
    CreatePostDialog
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class PostsModule { }
