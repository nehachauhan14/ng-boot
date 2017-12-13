import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list.component';

@Component({
  selector: 'employee-parent',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

})

export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
