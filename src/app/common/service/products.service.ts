import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn :'root'
})

export class ProductService {

    constructor(private httpClint : HttpClient ){}

    getProducts(){
        return this.httpClint.get('https://dummyjson.com/products')
    }

    getProductsById(id : string){
        return this.httpClint.get('https://dummyjson.com/products/'+id)
    }

}