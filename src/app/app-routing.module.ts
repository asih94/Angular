import { NgModule } from '@angular/core';
import { TeachersComponent } from './teachers/teachers-info/teachers.component';
import { EmployeesComponent } from './employees/employees-info/employees.component';
import { RouterModule, Routes } from '@angular/router';
import { PupilsComponent } from './pupils/pupils-info/pupils.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
 { path:'home', component: AppComponent },
  { path:'teachers', component: TeachersComponent },
  { path:'pupils', component: PupilsComponent },
  { path:'employees', component: EmployeesComponent },  
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
