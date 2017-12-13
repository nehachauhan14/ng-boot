import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component' ; 
import {EmployeeAddComponent} from './employee/employee-add/employee-add.component';
import './rxjs-operators' ; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
  
})

export class AppComponent {
  title = 'app';
}
