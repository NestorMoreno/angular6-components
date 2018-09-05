import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component' 

export const appRoutes: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'main', component: MainComponent },
    { path: 'details', component: DetailsComponent }
  ];
  