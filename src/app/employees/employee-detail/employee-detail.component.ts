import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Employee from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: string | null = "";
  employee: Observable<Employee | undefined> = of(undefined);
  constructor(private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.employee = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getEmployee(params.get("id"))));

  }

  goBack(){
    this.router.navigate(['/employees'])

  }


}
