import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UploadPostService } from 'src/app/services/upload-post.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
  
  posts:any;
  
  constructor(private _uploadPostservice: UploadPostService){}

  ngOnInit(): void {
    this._uploadPostservice.getPosts().subscribe(posts=>{

      let processedPosts: any[] = [];

      posts.forEach((post: any)=>{
        processedPosts = [...processedPosts,post.payload.doc.data()];
      })
      this.posts=processedPosts;
      console.log(this.posts);
    });
  }
}
