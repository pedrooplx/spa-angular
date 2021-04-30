import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { Routers } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MovieCardComponent } from './shared/movies/movie-card/movie-card.component';
import { MoviesHomeComponent } from './pages/movies/movies-home/movies-home.component';
import { MoviesHomeService } from './pages/movies/movies-home/movies-home.service';
import { Err404Component } from './shared/errors/err404/err404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesHomeComponent,
    MovieCardComponent,
    MoviesHomeComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    Routers,
    HttpClientModule
  ],
  providers: [
    MoviesHomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
