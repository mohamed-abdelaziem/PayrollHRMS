import { Routes } from '@angular/router';
import { MyAttendanceComponent } from './shared/components/my-attendance/my-attendance.component';
import { MyRequestsComponent } from './shared/components/my-requests/my-requests.component';
import { EventsComponent } from './shared/components/events/events.component';
import { MyPayslipsComponent } from './shared/components/my-payslips/my-payslips.component';
import { TeamManagementComponent } from './shared/components/team-management/team-management.component';
import { LeaveAndAttendanceComponent } from './shared/components/leave-and-attendance/leave-and-attendance.component';
import { RecruitmentComponent } from './shared/components/recruitment/recruitment.component';
import { PayrollComponent } from './shared/components/payroll/payroll.component';
import { EmployeesComponent } from './shared/components/employees/employees.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { ProfileComponent } from './shared/components/profile/profile.component';

export const routes: Routes = [
{
path: '',
redirectTo: '/login',
pathMatch: 'full',
},
{
path: 'login',
loadComponent: () =>
import('./core/pages/login/login.component').then(
(file) => file.LoginComponent,
),
title: 'Login',
},

{
path: 'dashboard',
loadComponent: () =>
import('./core/pages/dashboard/dashboard.component').then(
(file) => file.DashboardComponent,
),
title: 'Dashboard',
children: [
{
path: '',
loadComponent: () =>
import('./shared/components/home/home.component').then(
(file) => file.HomeComponent,
),
title: 'Main',
},
{
path: 'my-attendance',
loadComponent: () =>
import('./shared/components/my-attendance/my-attendance.component').then(
(file) => MyAttendanceComponent,
),
title: 'My Attendance',
},
{
path: 'my-requests',
loadComponent: () =>
import('./shared/components/my-requests/my-requests.component').then(
(file) => MyRequestsComponent,
),
title: 'My Requests',
},
{
path: 'events',
loadComponent: () =>
import('./shared/components/events/events.component').then(
(file) => EventsComponent,
),
title: 'Events',
},

{
path: 'my-payslips',
loadComponent: () =>
import('./shared/components/my-payslips/my-payslips.component').then(
(file) => MyPayslipsComponent,
),
title: 'My Payslips',
},

{
path : "team-management",
loadComponent : ()=>import('../app/shared/components/team-management/team-management.component').then(file=>file.TeamManagementComponent),
title : "Team Management",
children: [
{
path : "",
loadComponent : ()=>import('../app/shared/components/team-management-dashboard/team-management-dashboard.component').then(file=>file.TeamManagementDashboardComponent)
}
,
{
path: 'attendance',
title: 'Attendance',
loadComponent: () =>
import('../app/shared/components/attendance/attendance.component').then(
(file) => file.AttendanceComponent,
),
},
{
path : 'team-requests',
loadComponent : ()=>import('../app/shared/components/team-requests/team-requests.component').then(file=>file.TeamRequestsComponent),
title : 'Team Requests'
},
{
path : 'team-members',
loadComponent : ()=>import('../app/shared/components/team-members/team-members.component').then(file=>file.TeamMembersComponent),
title : 'Team Members'
},
{
path : 'team-compensation',
loadComponent : ()=>import('../app/shared/components/team-compensation/team-compensation.component').then(file=>file.TeamCompensationComponent),
title : 'Team Compensation'
}
],
},

{
path: 'leave&attendance',
loadComponent: () =>
import('./shared/components/leave-and-attendance/leave-and-attendance.component').then(
(file) => LeaveAndAttendanceComponent,
),
title: 'Leave & Attendance',
},

{
path: 'recruitment',
loadComponent: () =>
import('./shared/components/recruitment/recruitment.component').then(
(file) => RecruitmentComponent,
),
title: 'Recruitment',
},

{
path: 'payroll',
loadComponent: () =>
import('./shared/components/payroll/payroll.component').then(
(file) => PayrollComponent,
),
title: 'Payroll',
},

{
path: 'employees',
loadComponent: () =>
import('./shared/components/employees/employees.component').then(
(file) => EmployeesComponent,
),
title: 'Employees',
},

{
path: 'notifications',
loadComponent: () =>
import('./shared/components/notification/notification.component').then(
(file) => NotificationComponent,
),
title: 'Notification',
},

{
path: 'profile',
loadComponent: () =>
import('./shared/components/profile/profile.component').then(
(file) => ProfileComponent,
),
title: 'Profile',
},
],
},
{
path: 'reset-password',
loadComponent: () =>
import('./core/pages/reset-password/reset-password.component').then(
(file) => file.ResetPasswordComponent,
),
title: 'Reset Password',
},
{
path: '**',
loadComponent: () =>
import('./core/pages/not-found/not-found.component').then(
(file) => file.NotFoundComponent,
),
title: 'Not Found',
},
];
