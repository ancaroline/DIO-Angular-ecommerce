import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Clothes } from "./model/Clothes";

@Injectable()

export class ClothesService{
    private url = 'https://fakestoreapi.com/products/';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient) {}

    getClothes(){
        return this.http.get(this.url)
    }

    
}