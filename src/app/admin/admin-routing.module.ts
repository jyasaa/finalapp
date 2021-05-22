import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from '../addnew/addnew.component';
import { ViewmobilesComponent } from '../viewmobiles/viewmobiles.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {path:'viewmobiles',component:ViewmobilesComponent},
  {path:'addnew',component:AddnewComponent},
  {path:'',component:ViewmobilesComponent,pathMatch:"full"}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
