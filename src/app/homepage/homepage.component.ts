import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  btn1Text: string = "Button 1"  
  btn1Name: string = "Button1"
  btn1Id: string = "btn1"
  
  btn2Text: string = "Button 2"  
  btn2Name: string = "Button2"
  btn2Id: string = "btn2"
  
  activeBtn: string = ""
 
  constructor() {}

  ifClicked(name: string) {
    this.activeBtn = name
  }
}
