import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({         // fb stands for FormBuilder class Reactive Form
      fullName: ['', Validators.required],
      email: [''],
      // Nested From Group
      skillForm: this.fb.group({
        skillName: [''],
        experience: [''],
        proficiency: ['Beginner']
      })
    });
  }

  onSubmit(): void {
    //console.log(this.employeeForm.value);
    //console.log(this.employeeForm.controls.fullName.value);
    //console.log(this.employeeForm.get('fullName').value);
  }

  onLoadData(): void {
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
