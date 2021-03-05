import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilm } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  getFilms(name: string, page: number): Observable<IFilm> {
   return this.http.get<IFilm>(`https://www.omdbapi.com/?s=${name}&page=${page}&apikey=cfc44db`)
  }
  
}
