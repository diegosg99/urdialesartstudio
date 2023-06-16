import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage,getDownloadURL,getStorage,ref,uploadBytes, uploadString } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';
import { Post } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class UploadPostService {

  private post$ = new Subject<any>();

  private storage = getStorage()

  constructor(private firebase: AngularFirestore) { }

  uploadPost = (post: Post,image:any): Promise<any> => {

    let imagePath = 'images/'+image.name;

    let imagesRef = ref(this.storage, imagePath);
    let imageRef = ref(this.storage,imagePath);

    return uploadBytes(imagesRef, image).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(imageRef).then((downloadURL) => {

        post.photo = downloadURL;
        this.firebase.collection('posts').add(post)
          .then(()=>{
            console.log('Publicación subida con éxito.')
          }, error => {
            console.log(error);
          });
      });
    });
  }

  getPosts = ():Observable<any> => {
    return this.firebase.collection('posts',ref => ref.orderBy('fechaActualizacion','asc')).snapshotChanges();
  }
}


