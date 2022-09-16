import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';

constructor(private fb:FormBuilder,private employeeservice:EmployeeService) { }
submit=false;
// employee:{
//   id:string,
//   name:string,
//   position:string,
//   office:string,
//   salary:number
// }
registrationForm = this.fb.group({
  employeename:['',[Validators.required,Validators.pattern('^[a-zA-Z \'-]+$')]],
  position:[''],
  officelocation:[''],
  salary:['',[Validators.required,Validators.pattern('[0-9]{3,7}')]]
})
get f(){
  return this.registrationForm.controls;
}

onsubmit(){
  this.submit = true
  this.employeeservice.postEmployee(this.registrationForm.value)
  alert("Employee added successfully!!!")
  console.log("clicked")
  console.log('f', this.f)

}
ngOnInit(): void {


  }
}
