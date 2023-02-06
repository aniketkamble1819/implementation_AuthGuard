import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminroleGuard } from '../shere/adminrole.guard';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"user",component:UsersComponent},
    {path:"admin",component:AdminComponent},
    {path:"about",canActivate: [AdminroleGuard], component:AboutComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
