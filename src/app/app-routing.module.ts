import { FilmsComponent } from './films/films.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './films/film-details/film-details.component';

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'films/:id', component: FilmDetailsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
