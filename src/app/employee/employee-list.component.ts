import { Component } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component'; 

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html' 
})

export class EmployeeListComponent implements OnInit {

    constructor(private _employeeDataService: EmployeeService) {

    }

    ngOnInit(): void {
        this.getEmployee();
    }

    private employees: Employee[] = [];
    private errorMessage: any = "";


    getEmployee() {
        console.log("I am here now")
        this._employeeDataService.getData().subscribe(
            (employees) => {
                this.employees = employees;   
            },
            error => this.errorMessage = <any>error
        );
    }

    
  display: boolean = false;
  
     updateClick() {
        this.display = true;
    } 
  
   getEmployeeList():Employee[] {
      return this.employees
  }
}


