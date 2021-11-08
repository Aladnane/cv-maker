import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavBarComponent } from './components/partials/left-nav-bar/left-nav-bar.component';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { TopNavBarComponent } from './components/partials/top-nav-bar/top-nav-bar.component';
import { TrendingComponent } from './components/pages/trending/trending.component';
import { FullBlockComponent } from './components/partials/blockes/full-block/full-block.component';
import { DiscountPipe } from './pipes/discount/discount.pipe';
import { WithoutSpacesPipe } from './pipes/without-spaces/without-spaces.pipe';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { PageNotFoundComponent } from './components/pages/errors/page-not-found/page-not-found.component';
import { ConnectionComponent } from './components/pages/connection/layout/connection.component';
import { SignUpComponent } from './components/pages/connection/sign-up/sign-up.component';
import { LoginComponent } from './components/pages/connection/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    DiscoverComponent,
    TopNavBarComponent,
    TrendingComponent,
    FullBlockComponent,
    DiscountPipe,
    WithoutSpacesPipe,
    ProfilComponent,
    SignUpComponent,
    PageNotFoundComponent,
    ConnectionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WithoutSpacesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
