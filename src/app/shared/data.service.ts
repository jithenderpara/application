import { Injectable } from '@angular/core';
import { Http ,Response } from "@angular/http"
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  getdata(url) {
    var option = {}
   // return this.http.get(url, option).map(Response=>Response.json())
    return this.http.get(url).map((res: Response) => res.json())
  }
}
