import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { employees } from "./dummy-data-employees";
import Employee from "./Employee";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor() { }

    public getEmployees():Observable<Employee[]>{
        return of (employees);
    }

    public getEmployee(id:string | null): Observable<Employee| undefined>{
        for (const employee of employees) {
            if (employee.id == id) {
            return of(employee);
            }
        }
        return of (undefined);
        }
    }