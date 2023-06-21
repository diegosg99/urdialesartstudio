import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
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
