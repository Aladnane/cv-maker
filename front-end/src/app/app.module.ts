import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavBarComponent } from './components/partials/left-nav-bar/left-nav-bar.component';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { TopNavBarComponent } from './components/partials/top-nav-bar/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    DiscoverComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
