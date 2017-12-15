import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EmployeeComponent } from '../employee.component';

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
  
  constructor(private _employeeDataService : EmployeeService){ }

  ngOnInit() {
  
  }


  addEmployee() : void {
    console.log(this.newEmp); 
    this._employeeDataService.insertData(this.newEmp);
  }

}
