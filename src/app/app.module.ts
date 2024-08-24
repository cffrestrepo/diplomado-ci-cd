import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Rutas
// import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

//Services
import { HeroesService } from './services/heroes.service';




//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    // APP_ROUTING,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
