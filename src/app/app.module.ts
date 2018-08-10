import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { WorkComponent } from './work/work.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JavascriptComponent } from './course/javascript/javascript.component';
import { AngularComponent } from './course/angular/angular.component';
import { HtmlComponent } from './course/html/html.component';
import { CssComponent } from './course/css/css.component';
import { CustomDirective } from './custom.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service'
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    WorkComponent,
    CourseComponent,
    AboutComponent,
    JavascriptComponent,
    AngularComponent,
    HtmlComponent,
    CssComponent,
    CustomDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
