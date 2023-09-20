import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})

export class MyPostsComponent implements OnInit {

  

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private datePipe: DatePipe
  ) {
    
   }

  currentUser$ = this.authService.currentUserValue;
  createdBY: CreatedBy = {
    email: this.currentUser$.email,
    username: this.currentUser$.username
  }
    date: string="";
    posts: any[] =[];
  ngOnInit(): void {
    this.getAllMyPosts()
  }

  

  getAllMyPosts(){
    let filter = {
      createdBy: this.createdBY,
      date:this.date
    }
    this.postsService.getMyPosts(filter).subscribe(
      (data) => { 
        this.posts = data;
      },
      (error) => { 
      });
  }

  getPostsByDate(){
    let filter = {
      createdBy: this.createdBY,
      date: this.date?this.datePipe.transform(this.date,'yyyy-MM-dd'):""
    }
    this.postsService.getMyPosts(filter).subscribe(
      (data) => { 
        this.posts = data;
      },
      (error) => { 
      });
  }

}

export interface CreatedBy {
  username:string;
  email:string;
}

