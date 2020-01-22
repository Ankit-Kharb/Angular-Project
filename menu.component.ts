import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    
    person : any[] =[
     {
       name : "John" ,age : 25},
       {
       name : "Danerys" ,age : 23},
       {
       name : "Cersi" ,age : 32},
       {
       name : "Sansa" ,age : 20},
       {
       name : "Arya" ,age : 16}
   ]
   
  constructor() {
    
    
   }
   Add(name1,age1)
   {
     var n ={name : name1 ,age :age1}
     this.person.push(n)
     
   }



  ngOnInit() {
  }

}
