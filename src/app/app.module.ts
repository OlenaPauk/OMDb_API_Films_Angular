import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilmsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
