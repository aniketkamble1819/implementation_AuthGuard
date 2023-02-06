import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './admin/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shere/auth.guard';

const routes: Routes = [
  {path:"", component:LoginComponent, pathMatch:"full"},
  {
    path:"admin", canActivate:[AuthGuard], loadChildren:()=>import('./admin/admin.module').then(
      m=>m.AdminModule
    )
  },
  {path:"**", component:LandingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
