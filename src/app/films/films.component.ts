import { Component, OnInit } from '@angular/core';
import { IFilm } from '../shared/film';
import { FilmsService } from '../shared/films.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  filmName: string = 'Alice';
  page: number = 1;
  films: IFilm[] = []
  constructor(public filmsService: FilmsService) { }

  ngOnInit(): void {

  }
  searchFilms() {
    if(this.filmName!==''){
      this.filmsService.getFilms(this.filmName, this.page)
      .subscribe(
        (data: any) => this.films.push(...data.Search)
      )
    console.log('subscribe',this.films)
    this.filmName = ''
    }
    
  }

}
