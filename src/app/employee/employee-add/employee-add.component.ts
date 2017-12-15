import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list.component';

import { EmployeeService } from '../employee.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EmployeeComponent } from '../employee.component';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit {

newEmp = new Employee();
books : Employee[];
errorMessage : string ; 
firstName : string ; 
lastName : string ; 
gender : string ; 
salary : number ; 
  
  constructor(private _employeeDataService : EmployeeService, private _empList : EmployeeListComponent){ 
    
  }

  ngOnInit() {
    
  }
  
  addEmployee() : void {    
    this._employeeDataService.insertData(this.newEmp)
    .map(() => {                
              return this._empList.getEmployee()
                
            }
        )
    .subscribe(employee => {console.log(employee);});
  }

}
