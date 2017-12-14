
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { DetailDepartmentComponent } from './detail-department/detail-department.component';

const routes: Routes = [
  {path: 'departments', component: ListDepartmentComponent},
  {path: 'employees', component: ListEmployeeComponent},
  {path: 'departments/:id', component: DetailDepartmentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
export const routingComponents = [ListEmployeeComponent, ListDepartmentComponent, DetailDepartmentComponent];
