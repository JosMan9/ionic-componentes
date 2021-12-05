import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './components/interfaces/interface';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>

  constructor(private menu: MenuController, private data: DataService) { }

  ngOnInit() {
    this.componentes = this.data.getOpciones();
  }

  mostrarMenu() {
    this.menu.open('first');

  }
}
