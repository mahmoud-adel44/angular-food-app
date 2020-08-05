import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-recpie',
  templateUrl: './recpie.component.html',
  styleUrls: ['./recpie.component.css'],
})
export class RecpieComponent implements OnInit {
  mydata: any;

  intg: any;

  loaded: boolean = false;

  constructor(_DataService: DataService, _ActivatedRoute: ActivatedRoute) {
    let x = _ActivatedRoute.snapshot.paramMap.get('id');

    //console.log(x)

    //     _DataService.getRecipeId(x).subscribe( data=>{
    //       this.mydata = data;
    //     })
    _DataService.getRecipeId(x).subscribe((data: any) => {
      this.mydata = data.recipe;
      this.intg = data.recipe.ingredients;
      // console.log(this.intg)

      this.loaded = true;
    });
  }

  ngOnInit(): void {}
}
