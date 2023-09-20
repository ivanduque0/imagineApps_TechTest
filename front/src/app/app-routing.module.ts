import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'inicio', component: IndexComponent },
  { path: '', redirectTo: 'my-posts', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m. AuthModule) },
  { path: '', loadChildren: () => import('./posts/posts.module').then(m => m. PostsModule) },
  { path: '**', redirectTo: 'my-posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
