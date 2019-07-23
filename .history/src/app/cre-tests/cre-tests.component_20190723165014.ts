import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule }


@Component({
  selector: 'app-cre-tests',
  templateUrl: './cre-tests.component.html',
  styleUrls: ['./cre-tests.component.css']
})
export class CreTestsComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      test_creator: ['', Validators.required ],
      test_name: ['', Validators.required],
      test_type: ['', Validators.required],
      test_description: ['', Validators.required],
      test_date: ['', Validators.required],
      test_time: ['', Validators.required],
     });
  }

  ngOnInit() {
  }

}
