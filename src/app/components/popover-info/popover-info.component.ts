import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {


  elementos = Array(40);

  constructor(private popo: PopoverController) { }

  ngOnInit() {}

  onClick(n: number) {
    this.popo.dismiss({
      item: n
    });
  }

}
