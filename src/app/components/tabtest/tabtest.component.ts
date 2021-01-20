
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
  person: any;
  elist: Array<any>;
  inde: number;
  updateFlag: boolean

  constructor(private frmBuilder: FormBuilder) {
    this.regForm = this.frmBuilder.group({
      eid: "",
      ename: "",
      edesignation:"",
      esalary:""
    });
    this.elist = []
    this.inde= 0
    this.updateFlag=false

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

    this.regForm.reset()
  }

  eupdate(p: any, e: Event){
    e.preventDefault();
    console.log(p)
    this.updateFlag = true;
    this.regForm = this.frmBuilder.group({
      eid: p.eid,
      ename: p.ename,
      edesignation:p.edesignation,
      esalary:p.esalary
    });

  }

  edelete(p: any, e: Event){
    e.preventDefault();    
    this.inde = this.elist.findIndex((e)=>p.eid===e.eid)
    console.log(this.inde)
    this.elist.splice(this.inde,1)
    console.log(this.elist)
    this.regForm.reset()
  }

  update_submit(){

    this.inde = this.elist.findIndex((e)=>this.regForm.value.eid===e.eid)

    this.elist[this.inde].eid = this.regForm.value.eid;
    this.elist[this.inde].ename = this.regForm.value.ename;
    this.elist[this.inde].edesignation = this.regForm.value.edesignation;
    this.elist[this.inde].esalary = this.regForm.value.esalary;
    
    //this.regForm.reset()
  }

}
