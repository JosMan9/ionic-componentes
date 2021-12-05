import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/components/interfaces/interface';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>

  constructor(private menu: MenuController, private data: DataService) { }

  ngOnInit() {
    this.componentes = this.data.getOpciones();
  }

  mostrarMenu() {
    this.menu.open('first');

  }

}
