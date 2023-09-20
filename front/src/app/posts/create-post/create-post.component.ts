import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreatePostDialog } from '../createPostDialog.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private postsService: PostsService,
    private router: Router,
    public dialog: MatDialog,
    public dialogRefCrear: MatDialogRef<CreatePostDialog>
  ) { }

  currentUser$ = this.authService.currentUserValue;
  createdBY: CreatedBy = {
    email: this.currentUser$.email,
    username: this.currentUser$.username
  }

  ngOnInit(): void {
  }

  openDialog(result:boolean): void {
    const dialogRef = this.dialog.open(CreatePostDialog, {
      width: '350px',
      data: result,
      //maxHeight: '90vh'
      // enterAnimationDuration,
      // exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {

      
    });
  }

  submit(){
    const newPost = {
      title: this.createPostForm.value.title,
      content: this.createPostForm.value.content,
      createdBy: this.createdBY
    }
    this.postsService.createPost(newPost).subscribe(
      (response) => { 
        this.createPostForm.reset();
        this.openDialog(true)
      },
      (error) => { 
        this.openDialog(false)
      });
  }

}

export interface CreatedBy {
  username:string;
  email:string;
}