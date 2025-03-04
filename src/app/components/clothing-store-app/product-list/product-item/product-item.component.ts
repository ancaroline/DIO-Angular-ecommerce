import { Component, Input, OnInit } from '@angular/core';
import { Clothes } from '../model/Clothes';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  roupas!: Clothes;
  constructor() { }

  ngOnInit(): void {
  }

}
