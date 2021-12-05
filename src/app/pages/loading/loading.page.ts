import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  l: HTMLIonLoadingElement;

  constructor(private loading: LoadingController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentLoading();

    console.log(this.l);

    /*setTimeout( () => {
      //console.log(this.l);
      this.l.dismiss();
    }, 2000);*/

  }

  async presentLoading() {
    this.l = await this.loading.create({
      //cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 2000
    });
    await this.l.present();

    /*const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');*/

   /* setTimeout( () => {
      //console.log(this.l);
      this.l.dismiss();
    }, 2000);*/
  
  }

}
