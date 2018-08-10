import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,
              private aroute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.aroute.snapshot.queryParams);
    console.log(this.aroute.snapshot.fragment)
  }

  server(){
    this.route.navigate(['/blog'],{queryParams:{EdditableLink: "value"}, fragment:"something"})
  }


  

}
