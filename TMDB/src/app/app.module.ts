import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Routers } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { MainComponent } from './pages/movies/components/main/main.component';
import { CarouselComponent } from './pages/movies/components/carousel/carousel.component';
import { MovieCardComponent } from './pages/movies/components/movie-card/movie-card.component';
import { Err404Component } from './pages/shared/errors/err404/err404.component';
import { MoviesService } from './pages/movies/services/movies.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
    MainComponent,
    Err404Component,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    Routers,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
