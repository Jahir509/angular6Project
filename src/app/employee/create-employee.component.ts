import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // Nested From Group
      skillForm: new FormGroup({
        skillName: new FormControl(),
        experience: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }

  onSubmit(): void{
    //console.log(this.employeeForm.value);
    //console.log(this.employeeForm.controls.fullName.value);
    //console.log(this.employeeForm.get('fullName').value);
  }

  onLoadData(): void{
    this.employeeForm.setValue({
      fullName: 'jahir',
      email: 'jahir@gmail.com',
      skillForm: {
// tslint:disable-next-line: quotemark
        skillName: "Web developer",
        experience: 5,
        proficiency: 'Beginner'
      }
    });
  }

}
