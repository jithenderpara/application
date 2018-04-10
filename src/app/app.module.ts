import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import {DataService} from './shared/data.service';
import { FilterdescPipe } from './shared/filterdesc.pipe';
import { FilterJsonPipe } from './shared/filter-json.pipe'


@NgModule({
  declarations: [
    AppComponent,
    FilterdescPipe,
    FilterJsonPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
