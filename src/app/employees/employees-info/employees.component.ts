import { Component, OnInit, SimpleChange } from '@angular/core';
import Employee from 'src/app/employees/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees():void{
    this.service.getEmployees().subscribe((employees) => this.employees = employees)
  }

}


