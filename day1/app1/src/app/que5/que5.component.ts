import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que5',
  templateUrl: './que5.component.html',
  styleUrls: ['./que5.component.css']
})
export class Que5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  boxType=1
  color='green'


  changeColor(num:number){
    this.boxType=num
    }
}
