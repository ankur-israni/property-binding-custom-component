import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.scss']
})
export class EmployeeInputComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() hireDate: string;

  constructor() {
    setInterval(() => {
      this.hireDate = new Date().toISOString();
    }, 5000);
  }

  ngOnInit() {
  }

}
