import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage,getDownloadURL,getStorage,ref,uploadBytes, uploadString } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private storage = getStorage()

  constructor(private firebase: AngularFirestore) { }

  uploadProduct = (post: Product,image:any): Promise<any> => {

    let imagePath = 'images/'+image.name;

    let imagesRef = ref(this.storage, imagePath);
    let imageRef = ref(this.storage,imagePath);

    return uploadBytes(imagesRef, image).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(imageRef).then((downloadURL) => {

        post.photo = downloadURL;
        this.firebase.collection('productos').add(post)
          .then(()=>{
            console.log('Producto subido con éxito.')
          }, error => {
            console.log(error);
          });
      });
    });
  }

  getProducts = ():Observable<any> => {
    return this.firebase.collection('productos',ref => ref.orderBy('fechaActualizacion','asc')).snapshotChanges();
  }
}


