import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AssessService } from '../assess.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  name = new FormControl('');
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private as: AssessService) {
    this.createForm();
   }

   createForm() {
     this.angForm = this.fb.group({
      company_id: ['', Validators.required ],
      company_name: ['', Validators.required],
      test_name: ['', Validators.required],
     });
   }

   addAssess(companyid, companyname, testname ) {
     this.as.addAssess(companyid, companyname, testname);
   }

  ngOnInit() {
  }

}
