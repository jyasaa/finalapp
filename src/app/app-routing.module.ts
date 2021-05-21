import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SwatchesComponent } from './swatches/swatches.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'products', component:ProductsComponent,children:[
    {path:'laptops',component:LaptopsComponent},
    {path:'mobiles',component:MobilesComponent,children:[
      {path:'viewmobiles',component:ViewmobilesComponent},
      {path:'addnew',component:AddnewComponent},
      {path:'',redirectTo:'/products/mobiles/viewmobiles',pathMatch:'full'}
    ]},
    {path:'swatches',component:SwatchesComponent},
    {path:'',redirectTo:'/products/laptops',pathMatch:'full'}
  ]},
  {path:'test',component:TestComponent},
  {path:'test/:id',component:UserdetailsComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
