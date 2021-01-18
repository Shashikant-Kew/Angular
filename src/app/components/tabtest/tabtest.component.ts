
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tabtest',
  templateUrl: './tabtest.component.html',
  styles: [
  ]
})
export class TabtestComponent implements OnInit {
  regForm: FormGroup;
  elist: Array<object>

  constructor(private frmBuilder: FormBuilder) {
    this.regForm = this.frmBuilder.group({
      eid: "",
      ename: "",
      edesignation:"",
      esalary:""
    });
    this.elist = []

   }

  ngOnInit(): void {
  }

  logForm() {
    console.log(this.regForm.value);
  }

  add() {
    console.log(this.regForm.value);
    this.elist.push(this.regForm.value);
    console.log(this.elist);
  }

}
