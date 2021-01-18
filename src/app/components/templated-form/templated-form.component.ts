import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templated-form',
  templateUrl: './templated-form.component.html',
  styles: [
  ]
})
export class TemplatedFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logForm(form: any) {
    console.log(form.value);
  }
}
