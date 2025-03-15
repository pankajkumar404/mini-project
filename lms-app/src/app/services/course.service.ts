import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private firestore: AngularFirestore) { }

  getCourses(): Observable<any[]>{
    return this.firestore.collection('courses').valueChanges();
  }

  addCourse(course:any) : Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('courses').doc(id).set(course);
  }

}
