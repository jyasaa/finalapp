import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from './data.service';

import {User} from './models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dsObj:DataService, ){ }
 

  userObj:User={username:"",dob:"",mail:""};


  users=[];
   addUserData()
   {
       
     //push into users array
     //this.users.push(ref.value)

     //to clear input section of the form
     //ref.reset()

     //console.log(this.userObj)

     this.users.push(this.userObj);

    this.userObj={username:"",dob:"",mail:""};

   }

   deleteUser(index)
   {
    this.users.splice(index,1);
   }

   
 
}


 
