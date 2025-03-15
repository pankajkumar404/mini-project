import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  imports: [NgIf, NgFor, FormsModule]
})
export class CourseComponent implements OnInit {
  courses: any[] = [];
  courseTitle: string = '';
  courseDescription: string = '';

  constructor(private courseService: CourseService){}

  ngOnInit(): void {
      this.courseService.getCourses().subscribe((courses) => {
        this.courses = courses;
      });
  }

  addCourse(): void {
    const newCourse = {
      title: this.courseTitle,
      description: this.courseDescription,
      createdAt: new Date(),
    };
    this.courseService.addCourse(newCourse).then(()=>{
      this.courseTitle = '';
      this.courseDescription = '';
    });
  }

}
