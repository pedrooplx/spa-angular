import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routers } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './pages/movies/index/index.component';
import { MovieCardComponent } from './shared/movies/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    Routers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
