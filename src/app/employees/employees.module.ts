import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesInfoRoutingModule } from './employees-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees-info/employees.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeDetailComponent, EmployeesComponent
  ],
  imports: [
    CommonModule, FormsModule,
    EmployeesInfoRoutingModule
  ]
})
export class EmployeesInfoModule { }
