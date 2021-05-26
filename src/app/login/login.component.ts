import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref){
      let userloginObj=ref.value;
      
      //if username and password are admin&admin then navigate tp admin module
      if(userloginObj.username!='admin' || userloginObj.password!='admin'   ){
          alert("invalid credentials")
      }
      else{
        //save username in local storage
        localStorage.setItem("username","admin");
        //navigate to admin component
        this.router.navigateByUrl("/admin")
      }
  }

}
