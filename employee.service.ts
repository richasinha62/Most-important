import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Employee } from './employee';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { LeaveDetails } from './leave-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http : Http) { }
  getEmployees() : Observable<Employee[]> {
   return this.http.get("http://localhost:8080/ftp86/api/employees")
    .map((res : Response) => res.json());
  }

  getEmpDetails(empId) : Observable<Employee> {
    return this.http.get("http://localhost:8080/ftp86/api/employees/" +empId)
    .map((res : Response) => res.json());
  }
  
  getLeaveHistory(empId) : Observable<LeaveDetails[]> {
    return this.http.get("http://localhost:8080/ftp86/api/employees/leavedetails/his/" + empId)
    .map((res : Response) => res.json());
  }

  applyLeave(leavedetails:LeaveDetails,empid : number):Observable<String>{ 
    return this.http.post('http://localhost:8080/ftp86/api/employees/applyleave/' +empid,leavedetails)
     .map(response=>response.text()) 
   }

   pendingLeave(empId) : Observable<LeaveDetails[]> {
     return this.http.get("http://localhost:8080/ftp86/api/employees/leavedetails/pending/" + empId)
     .map((res : Response) => res.json());
   }

   leaveIdInfo(leaveId) : Observable<LeaveDetails> {
     return this.http.get("http://localhost:8080/ftp86/api/employees/leavedetails/leaveid/" + leaveId)
     .map((res : Response) => res.json());
   }

   approve(leavedetails:LeaveDetails,mgrid : number) : Observable<String> {
    return this.http.post("http://localhost:8080/ftp86/api/employees/approvedeny/" +mgrid,leavedetails)
    .map(response=>response.text()) 
   }
  
}
