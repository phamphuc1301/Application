import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component'; 
import { UserComponent } from './component/user/user.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';

const routes: Routes = [
  { path : 'user', component : UserComponent},
  { path : 'dashboard', component: DashboardComponent},
  { path : '', redirectTo: '/dashboard', pathMatch:'full'},
  { path : 'detail/:id', component : HeroDetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
export const routingForRoot : ModuleWithProviders = RouterModule.forRoot(routes);