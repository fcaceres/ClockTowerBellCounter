import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'Fred\'s Bell Counter';

  createRange(number){
    var items: number[] = [];
    for(var i = 0; i <= number; i++){
       items.push(i);
    }
    return items;
  }
}

