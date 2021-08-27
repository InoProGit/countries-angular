import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilterPageComponent } from './pages/filter-page/filter-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { HeaderComponent } from './modules/global/header/header.component';
import { FooterComponent } from './modules/global/footer/footer.component';

import { FilterService } from './services/filter-service/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FilterPageComponent,
    CountryPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
