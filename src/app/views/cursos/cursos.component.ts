import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{
  
  courses!: Array<any>;

  constructor(private _courseService:CourseService) {

  }

  ngOnInit(): void {
    this._courseService.getCourses().subscribe(courses=>{

      let processedCourses: any[] = [];

      courses.forEach((course: any)=>{
        processedCourses = [...processedCourses,course.payload.doc.data()];
      })
      this.courses=processedCourses;
      console.log(this.courses);
    });
  }
}
