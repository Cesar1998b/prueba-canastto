import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = `http://www.mocky.io/v2/5ed0b4443500005b00ff9e02`;

  constructor(private http: HttpClient) { }

  getCategoriesAndProducts(){
    return this.http.get(this.baseUrl);
  }

}
