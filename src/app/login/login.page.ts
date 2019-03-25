import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string=""
  password: string=""
  
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const {username, password}=this
    try {
      //the next line is a "hardcoded" line:
      const res= await this.afAuth.auth.signInWithEmailAndPassword(username+"@boa.com",password)
      console.log(res)
    } catch (error) {
        console.dir(error)
        if(error.code==="auth/operation-not-allowed"){
          console.log("user not found. message created by carloncho")

        }

    }
  }
}
