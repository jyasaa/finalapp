import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component  {

  constructor() { }

  users=[];

   addUserData(ref)
   {
     //push into users array
     this.users.push(ref.value)

     //to clear input section of the form
     ref.reset()
   }

   deleteUser(index)
   {
    this.users.splice(index,1)
   }

}
