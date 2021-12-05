import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoB = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAlbums().subscribe( albumes => {
      this.albumes = albumes;
    });
  }

  onSearch(event) {
    this.textoB = event.detail.value;
  }

}
