import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "../../node_modules/@angular/core";

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
import { AuthGuardService } from "./auth-guard.service";

const appRoutes: Routes = [
    { path:'', component: HomeComponent },
    { path:'about', component: AboutComponent },
    { path:'blog', component: BlogComponent },
    { path:'course',
      // canActivate: [AuthGuardService] ,
      canActivateChild : [AuthGuardService],
      component: CourseComponent ,
      children:[
      { path:'javascript', component: JavascriptComponent },
      { path:'css', component: CssComponent },
      { path:'html', component: HtmlComponent },
      { path:'angular', component: AngularComponent }
    ]},      
    { path:'work', component: WorkComponent },
    { path: '**', component: PageNotFoundComponent }

  ]

  @NgModule({

    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
      
  })
  export class AppRoutingModule{

  }

