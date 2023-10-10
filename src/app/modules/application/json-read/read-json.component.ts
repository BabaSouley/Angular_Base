
import { Component, OnInit } from '@angular/core';
import { ReadJsonService } from './read-json.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJsonComponent implements OnInit {

  items: any;
  bps: any;
  listBp: any;
  loaded: boolean;
  private _jsonURL = '../../../../assets/json/encours.json';
  constructor(
    private ReadJsonService: ReadJsonService,private http: HttpClient) {
    this.loaded = false;
    this.getJSON().subscribe(data => {
      this.loaded = true;
      const res_array = []; 
         for(let i in data.BPs) { 
            res_array.push([i,data.BPs[i]]); 
         }; 
      this.listBp = res_array;
     });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.getJSON().subscribe(data => {
      this.loaded = true;
      const res_array = []; 
         for(let i in data.BPs) { 
            res_array.push([i,data.BPs[i]]); 
         }; 
      this.listBp = res_array;
     });
  }

  resetUsers(): void {
    this.listBp = null;
    this.loaded = false;
  }

}