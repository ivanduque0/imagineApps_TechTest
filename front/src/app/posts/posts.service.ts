import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Authorization: 'my-auth-token'
	})
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baaseUrl = 'http://localhost:3000/posts/';

  constructor(
    private http:HttpClient
  ) { }

  getMyPosts(filter:any){
    return this.http.post<any[]>(`${this.baaseUrl}user-posts`,filter)
  }
  getAllPosts(){
    return this.http.get<any[]>(`${this.baaseUrl}all-posts`)
  }
  getPosts(filter:any){
    return this.http.post<any[]>(`${this.baaseUrl}all-posts`, filter)
  }

  createPost(newPost:any){
    return this.http.post<any[]>(`${this.baaseUrl}create-post`,newPost)
  }
}
