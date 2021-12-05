import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaN: Date = new Date();

  customsYears = [2050, 2049, 2048, 2039, 2010, 2005, 2000];

  customs= {
    buttons: [
      {
        text:'Hola',
        handler: (event) => {
          console.log(event);
        }
      }, {
        text: 'Mundo'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
