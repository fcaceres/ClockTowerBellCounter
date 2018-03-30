import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';

@Component({
  selector: 'app-bells',
  templateUrl: './bells.component.html',
  styleUrls: ['./bells.component.css']
})
export class BellsComponent implements OnInit {

  public myHour1: number;
  public myHour2: number;
  public myMins1: number;
  public myMins2: number;
  public result: number;

  Bellmagic() {

    var h1 = +(this.myHour1);
    var m1 = +(this.myMins1);
    var h1m1 = (h1);
    var h2 = +(this.myHour2);
    var m2 = +(this.myMins2); 
    var h2m2 = (h2);   
    var result: number;
    var createRange: number;
    var late: number;
    var preresult: number;

    if( (h1> 0)&&(m1> 0)) {
      if (h1 > h2 ) {
        h1m1 = 0
      }
    }
    if( (h1=h2)) {
      sum = 156;
    }    
    if ((((h2m2)-(h1m1))) < 0) {
      preresult = 0;
    }
    if ((((h2m2)-(h1m1))) >= 0) {
      preresult = (((h2m2)-(h1m1)));
      if ((isNaN(m1))||(m1 < 1)){
        late = 0;
      } else {
        late = 1;
      } 
      
      var items: number[] = [];
      for(var i = late; i <= preresult; i++){
         items.push(h1m1+i);
         var index = items.indexOf(0);
          if (index !== -1) { items[index] = 12;}
         var index = items.indexOf(13);
          if (index !== -1) { items[index] = 1; }
          index = items.indexOf(14);
          if (index !== -1) { items[index] = 2; }
          index = items.indexOf(15);
          if (index !== -1) { items[index] = 3; }       
          index = items.indexOf(16);
          if (index !== -1) { items[index] = 4; }    
          index = items.indexOf(17);
          if (index !== -1) { items[index] = 5; }    
          index = items.indexOf(18);
          if (index !== -1) { items[index] = 6; }    
          index = items.indexOf(19);
          if (index !== -1) { items[index] = 7; } 
          index = items.indexOf(20);
          if (index !== -1) { items[index] = 8; }    
          index = items.indexOf(21);
          if (index !== -1) { items[index] = 9; }    
          index = items.indexOf(22);
          if (index !== -1) { items[index] = 10; }    
          index = items.indexOf(23);
          if (index !== -1) { items[index] = 11; }    
          index = items.indexOf(24);
          if (index !== -1) { items[index] = 12; }                                                            

         var sum = items.reduce((x, y) => x + y);
      }
      return sum;
    }  
  }

  title = 'Fred\'s Bell Counter';

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
  constructor() { }
  ngOnInit() {
  }

}
