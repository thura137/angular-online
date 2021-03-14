import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  showBtn = false

  showBtnState() {
    this.showBtn = !this.showBtn
  }

  targetKeyworkd = ""

  setKeyworkd(input: any) {
    this.targetKeyworkd = input.value
    input.value = ""
  }

  backGround = ""
}
