import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  public  gtdata: any [] = [];
  constructor(public Api: ApiService, public router: Router) { }

  ngOnInit() {

    console.log('fghdcgh');
  this.getData();
}
getData() {
    this.Api.getData().subscribe(
      (res: any) => {
        this.gtdata = res.data;
        console.log(this.gtdata[0].id);
      }
    );
  }
}

