import { Component, OnInit } from '@angular/core';
import Teacher from '../Teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];

  constructor(private service: TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers():void{
    this.service.getTeachers().subscribe((teachers) => this.teachers = teachers)
  }


}
