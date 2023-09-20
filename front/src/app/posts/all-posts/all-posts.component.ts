import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private datePipe: DatePipe
  ) { }
  date: string="";
  word:string="";
  posts:any[]=[];
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postsService.getAllPosts().subscribe(
      (data) => { 
        this.posts = data
      },
      (error) => { 
      });
  }

  getPostsByWordAndDate(){
    let filter = {
      word: this.word,
      date: this.date?this.datePipe.transform(this.date,'yyyy-MM-dd'):""
    }
    this.postsService.getPosts(filter).subscribe(
      (data) => { 
        this.posts=data
      },
      (error) => { 
      });
  }

}

export interface CreatedBy {
  username:string;
  email:string;
}