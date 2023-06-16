import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage,getDownloadURL,getStorage,ref,uploadBytes, uploadString } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';
import { Curso } from '../models/Cursos';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course$ = new Subject<any>();

  private storage = getStorage()

  constructor(private firebase: AngularFirestore) { }

  uploadCourse = (course: Curso,image:any): Promise<any> => {

    let imagePath = 'images/'+image.name;

    let imagesRef = ref(this.storage, imagePath);
    let imageRef = ref(this.storage,imagePath);

    return uploadBytes(imagesRef, image).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(imageRef).then((downloadURL) => {

        course.photo = downloadURL;
        this.firebase.collection('cursos').add(course)
          .then(()=>{
            console.log('Curso subido con éxito.')
          }, error => {
            console.log(error);
          });
      });
    });
  }

  getCourses = ():Observable<any> => {
    return this.firebase.collection('cursos',ref => ref.orderBy('fechaActualizacion','asc')).snapshotChanges();
  }
}


