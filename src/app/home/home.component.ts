import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service'
import { from } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mydata:any = [];

  searchTerm:string;

  constructor( _DataService:DataService) {

   let foundData = [];
   foundData =  _DataService.getData();
   //console.log(foundData)
  // console.log(foundData)
   for (let i of foundData)
   {
     i.subscribe( data=>{
       
      for( let j of data.recipes)
      {
        this.mydata.push(j)
      }

     })
   }

    //   this.mydata= data['recipes']
       // console.log(data.recipes)
       // console.log(this.mydata)
    //  } )
   
   }

  ngOnInit(): void {
  }

}
