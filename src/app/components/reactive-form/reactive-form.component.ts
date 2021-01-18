// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'reactive-form',
//   templateUrl: './reactive-form.component.html'
// })
// export class ReactiveFormComponent implements OnInit {
//   regForm: FormGroup;

//   constructor() {
//     this.regForm = new FormGroup({
//       firstname: new FormControl(),
//       lastname: new FormControl(),
//       address: new FormGroup({
//         city: new FormControl(),
//         zip: new FormControl()
//       })
//     });
//   }

//   ngOnInit(): void {
//   }

//   logForm() {
//     console.log(this.regForm.value);
//   }
// }

// ------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  regForm: FormGroup;

  constructor(private frmBuilder: FormBuilder) {
    this.regForm = this.frmBuilder.group({
      firstname: "",
      lastname: "",
      address: this.frmBuilder.group({
        city: "",
        zip: 0
      })
    });
  }

  ngOnInit(): void {
  }

  logForm() {
    console.log(this.regForm.value);
  }

  set() {
    this.regForm.setValue({
      firstname: "Abhjeet",
      lastname: "Gole",
      address: {
        city: "Pune",
        zip: 411029
      }
    });
  }

  patch() {
    this.regForm.patchValue({
      firstname: "Abhjeet",
      lastname: "Gole"
    });
  }

  reset() {
    this.regForm.reset();
  }
}
