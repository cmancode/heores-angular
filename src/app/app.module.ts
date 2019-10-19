import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Service
import { HeroesService } from './components/service/heroes.service';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    DetalleHeroeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
