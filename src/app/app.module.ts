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
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';


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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FilterService,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          method: 'POST',
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:7474/db/neo4j/tx', // Neo4j local
            headers: new HttpHeaders().set('Authorization', 'Basic bmVvNGo6Z3JhcGhSb290'), // set autorization, `Basic ${btoa('neo4j:graphRoot')}`
          }),
        };
      },
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
