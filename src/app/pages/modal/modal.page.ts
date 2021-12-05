import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  async onClick() {
    const modal = await this.modal.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre: 'Manuel',
        pais: 'México'
      }
    });

    await modal.present();

    const {data} = await modal.onDidDismiss();

    console.log(data);
  }

}
