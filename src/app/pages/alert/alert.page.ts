import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Cuidado!!',
      message: 'Esta es un mensaje de alerta',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Cuidado!!',
      message: 'Es un mensaje de alerta',
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('Click en Ok')
        }
       },

       {
         text: 'Cancel',
         handler: () => {
           console.log('Click en Cancelar')
         },
         role: 'cancel',
         cssClass: 'rojo'
       }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Confirmar!',
      message: 'Mensaje de <strong>texto</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      backdropDismiss: false,
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'apellidos',
          type: 'text',
          id: 'apellidos-id',
          placeholder: 'Apellidos'
        },
        // multiline input.
        {
          name: 'direccion',
          id: 'direccion',
          type: 'textarea',
          placeholder: 'Dirección'
        },
        {
          name: 'link',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'fechaAlta',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'fechaBaja',
          type: 'date'
        },
        {
          name: 'edad',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'numeroFavorito',
          type: 'number'
        },
        {
          name: 'contrasenia',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data: any) => {
            console.log('Confirm Ok');
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Vehículos',
      inputs: [
        {
          name: '',
          type: 'radio',
          label: 'Carro',
          value: 'value1',
          handler: () => {
            console.log('Carro seleccionado');
          },
          checked: true
        },
        {
          name: 'motoC',
          type: 'radio',
          label: 'Motocicleta',
          value: 'value2',
          handler: () => {
            console.log('Motocicleta seleccionado');
          }
        },
        {
          name: 'motoN',
          type: 'radio',
          label: 'Motoneta',
          value: 'value3',
          handler: () => {
            console.log('Motoneta seleccionado');
          }
        },
        {
          name: 'camion',
          type: 'radio',
          label: 'Camión',
          value: 'value4',
          handler: () => {
            console.log('Camión seleccionado');
          }
        },
        {
          name: 'camioneta',
          type: 'radio',
          label: 'Camioneta',
          value: 'value5',
          handler: () => {
            console.log('Camioneta seleccionado');
          }
        },
        {
          name: 'cuatri',
          type: 'radio',
          label: 'Cuatrimoto ',
          value: 'value6',
          handler: () => {
            console.log('Cuatrimoto seleccionado');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Vdeojuegos de Halo',
      inputs: [
        {
          name: 'halo1',
          type: 'checkbox',
          label: 'Halo: Combat Evolved',
          value: 'value1',
          handler: () => {
            console.log('Halo: Combat Evolved seleccionado');
          },
          checked: true
        },

        {
          name: 'halo2',
          type: 'checkbox',
          label: 'Halo 2',
          value: 'value2',
          handler: () => {
            console.log('Halo 2 seleccionado');
          }
        },

        {
          name: 'halo3',
          type: 'checkbox',
          label: 'Halo 3',
          value: 'value3',
          handler: () => {
            console.log('Halo 3 seleccionado');
          }
        },

        {
          name: 'halo4',
          type: 'checkbox',
          label: 'Halo 4',
          value: 'value4',
          handler: () => {
            console.log('Halo 4 seleccionado');
          }
        },

        {
          name: 'halo5',
          type: 'checkbox',
          label: 'Halo 5: Guardians',
          value: 'value5',
          handler: () => {
            console.log('Halo 5: Guardians seleccionado');
          }
        },

        {
          name: 'haloi',
          type: 'checkbox',
          label: 'Halo Infinite',
          value: 'value6',
          handler: () => {
            console.log('Halo Infinite seleccionado');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


}
