import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  currentUsername$ = this.authService.currentUserValue.username;
  ngOnInit(): void {
  }

  goTo(route:string){
    this.router.navigate([route]);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/#']);
  }
  
}
