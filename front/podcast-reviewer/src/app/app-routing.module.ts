import { AvaliationComponent } from './pod-review/avaliation/avaliation.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'review',
    component: AvaliationComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
