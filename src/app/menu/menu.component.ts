import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.less'
})
export class MenuComponent {

  items:any =[
    {id:1,name:'item1',description:'description1'},

    {id:2,name:'item2',description:'description2'},

    {id:3,name:'item3',description:'description3'},

    {id:4,name:'item4',description:'description4'},
  ]

  log(){
    console.log('MenuComponent')
  }
}
