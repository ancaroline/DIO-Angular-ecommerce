import { Component, OnInit } from '@angular/core';
import { ClothesService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  roupas: any;
  clothesService : ClothesService
  constructor(clothesService : ClothesService) {
    this.clothesService = clothesService;
   }

  ngOnInit(): void {
    this.roupas = this.clothesService.getClothes().subscribe ((data => {
      this.roupas = data;
      console.log(this.roupas);
    }))

  }

}
