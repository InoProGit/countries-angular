import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilterPageComponent } from './pages/filter-page/filter-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'filter', component: FilterPageComponent },
  { path: 'country', component: CountryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
