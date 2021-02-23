import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBucketsComponent } from './pages/list-buckets/list-buckets.component';

const routes: Routes = [
  
  {
    path:'showlist',component:ListBucketsComponent
  },
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
