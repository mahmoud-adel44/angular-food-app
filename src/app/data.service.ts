import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _HttpClient:HttpClient) { }

  recipes = ['carrot', 'pizza' ,'potato' , 'tomato' , 'pasta' , 'chocolate', 'chicken'];
 
  

  getData()
  {
    let found = [];

  for (let i of this.recipes) {
    
  found.push( this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=${i}`)) 
  
  
    }
   return found ;
 }

 getRecipeId(id)
 {
  return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
 }
 
 
}
