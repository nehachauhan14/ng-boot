import { Component, OnInit } from '@angular/core';
import {EmployeeListComponent} from '../employee-list.component'; 

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  display: boolean = false;
      
  constructor() { }

  ngOnInit() : void {
   // this.openLoginDialog();
  }

  openLoginDialog(){
      this.display = true;
  }
}
