import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { EmpShowComponent } from './emp-show/emp-show.component';
import { ManShowComponent } from './man-show/man-show.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { PendingLeaveStatusComponent } from './pending-leave-status/pending-leave-status.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { GrdFilterPipe } from './GrdFilter.pipe';
import { EmployeeService } from 'src/app/employee.service';

const routs : Routes = [
  {path:'Login/:empId/:mgrId', component:LoginComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path:'Dashboard/:empId/:mgrId', component:DashboardComponent},
  {path:'LeaveHistory/:empId', component:LeaveHistoryComponent},
  {path:'ApplyLeave', component:ApplyLeaveComponent},
  {path:'PendingLeaveStatus/:empId', component:PendingLeaveStatusComponent},
  // {path:'ApproveDeny/:leaveId/:leaveEmpId/:mgrId', component:ApproveDenyComponent},
  {path:'',component:EmployeeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent ,
    DashboardComponent,
    EmpShowComponent,
    ManShowComponent,
    LoginComponent,
    LeaveHistoryComponent,
    ApplyLeaveComponent,
    PendingLeaveStatusComponent,
    ApproveDenyComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routs)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
