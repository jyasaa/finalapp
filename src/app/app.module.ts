import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeevanComponent } from './jeevan/jeevan.component';
import { Form1Component } from './form1/form1.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { Prod3Component } from './prod3/prod3.component';
import { Prod4Component } from './prod4/prod4.component';
import { Prod5Component } from './prod5/prod5.component';
import { Prod6Component } from './prod6/prod6.component';
import { Prod7Component } from './prod7/prod7.component';
import { Prod8Component } from './prod8/prod8.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { SwatchesComponent } from './swatches/swatches.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AddnewComponent } from './addnew/addnew.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JeevanComponent,
    Form1Component,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    Prod1Component,
    Prod2Component,
    Prod3Component,
    Prod4Component,
    Prod5Component,
    Prod6Component,
    Prod7Component,
    Prod8Component,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    LaptopsComponent,
    MobilesComponent,
    SwatchesComponent,
    PagenotfoundComponent,
    TestComponent,
    UsersComponent,
    UserdetailsComponent,
    AddnewComponent,
    ViewmobilesComponent,
    SquarePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
