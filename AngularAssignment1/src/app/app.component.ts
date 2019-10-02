import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray = [];
  info: Array<{ username: string, password: string }> = [{
    username: 'Gayatri',
    password: '1234'
  },
  {
    username: 'Amisha',
    password: '5678'
  }];



  addUser(un, pass) {
    if (un !== "" && pass != "") {
      this.info.push({ username: un, password: pass });
      console.log(un + " " + pass);
      alert("Hello " + un + "! You have registered successfully!");
    } else {
      alert('Field required **')
    }

  }

  checkUser(un, pass) {
    if (un !== "" && pass != "") {
      var flag = 0;
      for (var i = 0; i < this.info.length; i++) {
        if (this.info[i].username == un && this.info[i].password == pass) {
          console.log(un + " " + pass);
          flag = 1;
          alert("Hello " + un + "! You have logged in successfully!");
          break;
        }

      }
      if (flag == 0)
        alert("Login Failed! Use proper credentials!");

    } else {
      alert('Field required **')
    }

  }



  onSubmit(value: any) {


  }

  title = 'signupLogin';
}
