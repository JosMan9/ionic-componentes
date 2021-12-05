import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Hola soy un Toast. Exactamente, soy como los de Android',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toast.create({
      header: 'Toast CABECERA',
      message: 'Click para cerrar',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'FAVORITO',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
