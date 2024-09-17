import { Component } from '@angular/core';
import {ReCaptchaV3Service} from "ng-recaptcha";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  ContactBody:any = {}
  Agreed = false
  constructor(private reCaptchaV3Service:ReCaptchaV3Service){

  }
  send(){
    this.reCaptchaV3Service.execute("importantAction").subscribe((token)=>{
      console.log(JSON.stringify(this.ContactBody),"submit: ",this.Agreed," Token: ",token)
    })
    
  }
}
