import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from '../components/dashboard-admin/dashboard-admin.component';
import { AuthGuard } from '../guard/auth.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  // { path: '', component: AdminComponent },
  {path:'', component:DashboardAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
