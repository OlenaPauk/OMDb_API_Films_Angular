import { Component, OnInit } from '@angular/core';
import { IFilm } from '../shared/film';
import { FilmsService } from '../shared/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  filmName: string = '';
  page: number = 1;
  films: IFilm[] = []
  localStorFilm: string = '';
  localStorPage: number = 0;
  constructor(public filmsService: FilmsService) { }

  ngOnInit(): void {

    this.setNameLocalStor();
    this.getFilmsLocalStor()
  }
  //set film name with local storage
  setNameLocalStor() {
    this.localStorFilm = localStorage.getItem('Film name') || '';
    if (this.localStorFilm) {
      this.filmName = this.localStorFilm;
      this.searchFilms()
    }
  }
  getFilmsLocalStor() {
    this.localStorPage = Number(localStorage.getItem('page') || '');
    if (this.localStorFilm) {
      while (this.page > this.localStorPage) {
        this.getFilms();
        this.page++
      }
    }
  }
  //method - click on button
  searchFilms() {
    if (this.filmName !== '') {
      this.getFilms()
    }
  }
  //get all films with url
  getFilms() {
    this.filmsService.getFilms(this.filmName, this.page)
      .subscribe(
        (data: any) => this.films.push(...data.Search)
      )
    localStorage.setItem('Film name', this.filmName)
    console.log('subscribe', this.films)
    this.filmName = '';


  }
  // click on button more
  more() {
    if (this.localStorFilm !== '') {
      this.filmName = this.localStorFilm;
      this.page++;
      this.getFilms()
      localStorage.setItem('Page', (this.page).toString())
    }
  }

}
