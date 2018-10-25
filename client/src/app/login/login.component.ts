import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Login } from '../models/login.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid: string;
  model = {
    usernmae: ''
  }
  mess: string;
  constructor(
    private chat: ChatService,
    private location: Location) {
  }


  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
    // this.senduserid('');
    // this.getuserid();
  }

  senduserid(meg: string) {
    this.chat.sendMsg(meg);
  }

  sendusername() {
    this.chat.postuser(this.model)
      .subscribe(msg => { this.mess = msg });
    // this.location.back();
  }

}
