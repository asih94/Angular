import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersInfoRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers-info/teachers.component';
import { FormsModule } from '@angular/forms';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';


@NgModule({
  declarations: [TeachersComponent,
    TeacherDetailComponent
  ],
  imports: [
    CommonModule, FormsModule,
    TeachersInfoRoutingModule
  ]
})
export class TeachersInfoModule { }
