import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees-info/employees.component';

const routes: Routes = [ 
  { path:'employees', component:EmployeesComponent },
  { path:'employee/:id', component:EmployeeDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesInfoRoutingModule { }
