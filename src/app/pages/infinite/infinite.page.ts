import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }  

  loadData(event) {

    setTimeout( () => {

      if(this.data.length > 50) {
        this.infinite.complete();
        this.infinite.disabled = true;
        return;
      }

      const nuevoA = Array(20);
      this.data.push(...nuevoA);
        this.infinite.complete();
    }, 1500);
  }

}
