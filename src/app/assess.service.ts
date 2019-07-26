
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessService {

  uri = 'http://localhost:3002/test';

  constructor(private http: HttpClient) { }

  addAssess(testid, testname, testcreator) {
    const obj = {
      testid: testid,
      testname: testname,
      testcreator: testcreator
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}
