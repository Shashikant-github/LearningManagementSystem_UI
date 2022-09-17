import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AuthGuard } from '../guard/auth.guard';
import { UserComponent } from './user.component';

const routes: Routes = [
  // { path: '', component: UserComponent }
  {path:'',component:DashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
