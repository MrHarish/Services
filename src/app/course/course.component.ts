import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  some:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  dothis(value){
    this.some = value.target.innerHTML.toLowerCase().replace(/ /g,'');
    this.router.navigate(['course',this.some])
    }

}
