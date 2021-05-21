import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeevan',
  templateUrl: './jeevan.component.html',
  styleUrls: ['./jeevan.component.css']
})
export class JeevanComponent {

  //instances
  array:string[]=[]
  statusOfButton:boolean=true
//username function
 send(name)
  {
    this.array.push(name)
  }
//changing state of button
  changeState()
  {
    this.statusOfButton=!this.statusOfButton
  }

}
