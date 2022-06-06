import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersComponent } from './teachers-info/teachers.component';

const routes: Routes = [
  { path:'teachers', component:TeachersComponent },
  { path:'teacher/:id', component:TeacherDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersInfoRoutingModule { }
