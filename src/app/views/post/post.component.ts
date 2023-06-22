import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  idPost:any;
  post:any;
  
  constructor(private _postService:PostService,private _Activatedroute:ActivatedRoute){}

  ngOnInit(): void {

    this.idPost = this._Activatedroute.snapshot.params['id'];

    this._postService.getPost(this.idPost).subscribe(post=>{

      let processedPost: any;

      processedPost = post.payload.doc.data();
      this.post=processedPost;
      console.log(this.post);
    });
  }
}
