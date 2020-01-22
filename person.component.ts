import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input ('i') i;
  constructor() { }
  getFont(i)
  {
    if(i.country=="in")
    return 24;
    else if(i.country=="ja")
    return 10;
    else if(i.country=="gr")
    return 20;
    else
    return 15 ;
  }

  ngOnInit() {
   
  }

}
