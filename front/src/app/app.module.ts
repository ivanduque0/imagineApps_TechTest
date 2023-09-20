import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { JwtInterceptor } from './auth/jwt-interceptor';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // FormsModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    
  ],
  providers: [
    DatePipe,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { 
      provide: MatDialogRef,
      useValue: []
       }, 
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
