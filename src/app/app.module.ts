import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Routing
import { RouterModule, Routes } from '@angular/router';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
// Components
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ActionsComponent } from './actions/actions.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';
// Services
import { AppService } from './app.service';
import { appRoutes } from './routing';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ActionsComponent,
    ResultsComponent,
    DetailsComponent,
    MainComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
