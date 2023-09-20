import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Login } from './login/models/login.model';
import { Register } from './register/models/register.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject: BehaviorSubject<ApplicationUser>;
	public currentUser: Observable<ApplicationUser>;

  private baaseUrl = 'http://localhost:3000/auth/';
  constructor(
    private http:HttpClient, 
  ) { 
    this.currentUserSubject = new BehaviorSubject<ApplicationUser>(
			JSON.parse(localStorage.getItem('currentUser')??"{}")
		);
		this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): ApplicationUser {
		return this.currentUserSubject.value;
	}

  login(userLogin:Login): Observable<any>{
    //return this.http.post(`${this.baaseUrl}login/`,userLogin) 

    return this.http.post<any>(`${this.baaseUrl}login/`,userLogin,).pipe(
			map(data => {
				// login successful if there's a jwt token in the response
				if (data && data.token) {
          const userData:ApplicationUser = {
            username: data.user.username,
            email: data.user.email,
            token: data.token
          }

					localStorage.setItem('currentUser', JSON.stringify(userData));
					this.currentUserSubject.next(userData);
				}

				return data;
			})
		);
    
  }

  logout(){
    localStorage.removeItem('currentUser');
		this.currentUserSubject.next({email:"",username:"",token:""});
  }

  register(userRegister:Register): Observable<any>{
    return this.http.post(`${this.baaseUrl}register`,userRegister, { observe: 'response' }
    )
  }

}

interface ApplicationUser {
  email:string;
  username:string;
  token:string;
}
