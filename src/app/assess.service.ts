
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessService {

  uri = 'http://localhost:3002/test';

  constructor(private http: HttpClient) { }

  addAssess(companyid, companyname, testcreator, testdate, testid, testname) {
    const obj = {
      company_id: companyid,
      company_name: companyname,
      test_creator: testcreator,
      test_date: testdate,
      test_id: testid,
      test_name: testname
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}
