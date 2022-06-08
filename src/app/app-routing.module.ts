import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSchedaComponent } from './film-scheda/film-scheda.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "film/:id", component: FilmSchedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
