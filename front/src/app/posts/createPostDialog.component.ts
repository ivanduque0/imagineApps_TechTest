import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'create-post-dialog',
    template: `
    <div  mat-dialog-content class="d-flex justify-content-center mb-4">
    <img *ngIf="postCreated" class="justify-content-center" src="../../../assets/success_circle.png" alt="image">
    <img *ngIf="!postCreated" class="justify-content-center" src="../../../assets/close_circle.png" alt="image">
    </div>
     
    <div mat-dialog-content class="d-flex justify-content-center mb-3">
      {{postCreated?"Post Created":"Uppss Try Later"}}
    </div>
    <div mat-dialog-actions class="d-flex justify-content-center mt-1">
      <button mat-button mat-dialog-close (click)="close()">Ok</button>
    </div>
    `,
    styleUrls: ['./create-post/create-post.component.css']
  })
  export class CreatePostDialog {

    constructor(public dialogRef: MatDialogRef<CreatePostDialog>,
      @Inject(MAT_DIALOG_DATA) public postCreated: boolean,
      private router: Router,
      ) {}

    close(): void{
      if (this.postCreated) {
        this.router.navigate(['/my-posts']);
      }
    }


  }

