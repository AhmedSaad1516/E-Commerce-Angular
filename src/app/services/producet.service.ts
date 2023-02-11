import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProducetService {

  constructor(private http:HttpClient) { }


  getAllProducts(){

    return this.http.get('https://fakestoreapi.com/products')
  }
  getAllCategorys(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductsByCategorys(model:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+model)
  }
  getProductsById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
