import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssessService } from '../assess.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private as: AssessService) {
    this.createForm();
   }

   createForm() {
     this.angForm = this.fb.group({
      comp_id: ['', Validators.required ],
      comp_name: ['', Validators.required],
      test_creator: ['', Validators.required]
     });
   }

   addAssess(companyid, companyname, testcreator) {
     this.as.addAssess(companyid, companyname, testcreator);
   }

  ngOnInit() {
  }

}
