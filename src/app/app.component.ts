import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _dataService: DataService) {
    this.loaddata()
    if (localStorage.getItem("selecteditem")) {
      this.activeClass = localStorage.getItem("selecteditem")
    }
  }
  //localStorage.getItem("selecteditem")
  OnInit() {

  }
  books: any;
  title = 'app';
  loaddata() {
    this._dataService.getdata("https://www.googleapis.com/books/v1/volumes?q=HTML5").subscribe(data => {
      console.log(data)
      this.books = data["items"].slice(0, 6)
    })
  }
  public activeClass;
  bookselect(id, active) {
    if (active == id) {
      this.activeClass = undefined
    }
    else {
      this.activeClass = id
    }
    localStorage.setItem('selecteditem', this.activeClass);
  }
  isNotFirst(index) {
    console.log(index)

  }
  public checked=false
  checkboxChange(id){
    this.checked=!id
    alert(id)
  }
}
