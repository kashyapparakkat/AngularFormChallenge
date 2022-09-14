import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http : HttpClient) { }

  postEmployee(employee:any){
    console.log("inside post employee")
    return this.http.post('http://localhost:3000/api/add-employee',employee)
    .subscribe(data =>{console.log(data)})
  }
}
