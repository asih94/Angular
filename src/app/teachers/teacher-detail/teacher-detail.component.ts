import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Teacher from '../Teacher';
import { TeacherService } from '../teacher.service';



@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  id: string | null = "";
  teacher: Observable<Teacher | undefined> = of(undefined);
  constructor(private service: TeacherService,
              private route: ActivatedRoute,
              private router: Router
              ){ }


  ngOnInit(): void {
    this.teacher = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getTeacher(params.get("id"))));

  }

  goBack(){
    this.router.navigate(['/teachers'])

  }

}

