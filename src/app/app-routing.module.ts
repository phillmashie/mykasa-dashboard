import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketingComponent } from './marketing/marketing.component';
import { UsersComponent } from './users/users.component';
import { GraphsComponent } from './graphs/graphs.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'users', component: UsersComponent },
  // ... Other routes in your application
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
