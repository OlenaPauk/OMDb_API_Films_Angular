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
  films: IFilm[]= []
  constructor(public filmsService: FilmsService) { }

  ngOnInit(): void {

  }
  searchFilms() {
    this.filmsService.getFilms(this.filmName, this.page).subscribe(
      (data:any)=> this.films.push(data)
    )
    console.log(this.films)
    this.filmName = ''
  }

}
