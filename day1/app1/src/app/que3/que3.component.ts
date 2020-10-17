import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.component.html',
  styleUrls: ['./que3.component.css']
})
export class Que3Component implements OnInit {

  name
  name1
  constructor() { }

  ngOnInit(): void {
  }

  showName(){
  this.name1='welcome to angular '+this.name
  }

}
