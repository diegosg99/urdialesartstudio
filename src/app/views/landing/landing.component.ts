import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
  
  posts:any;
  
  constructor(private _postservice: PostService,private router:Router){}

  ngOnInit(): void {
    this._postservice.getPosts().subscribe(posts=>{

      let processedPosts: any[] = [];

      posts.forEach((post: any)=>{
        processedPosts = [...processedPosts,post.payload.doc.data()];
      })
      this.posts=processedPosts;
      console.log(this.posts);
    });
  }
}
