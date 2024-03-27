import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {
button = false;
card = false;
toggle = false;
list = false;
slider = false;

  constructor() { }

  ngOnInit() {
  }

}
