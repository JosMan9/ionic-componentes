import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild('lista', {static: true}) list: IonList;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.usuarios = this.data.getUsuarios();
    }

  share( user: any) {
    console.log('favorite', user);
    this.list.closeSlidingItems();

  }

  favorite(user: any) {
    console.log('share', user);
    this.list.closeSlidingItems();

  }
  
  delete(user: any) {
    console.log('delete', user.name);
    this.list.closeSlidingItems();
 
  }
  



}
