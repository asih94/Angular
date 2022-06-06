import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { teachers } from "./dummy-data-teachers";
import Teacher from "./Teacher";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    constructor() { }

    public getTeachers():Observable<Teacher[]>{
        return of (teachers);
    }

    public getTeacher(id:string | null): Observable<Teacher| undefined>{
        for (const teacher of teachers) {
          if (teacher.id == id) {
            return of(teacher);
            }
              }
          return of (undefined);
               }
    }

