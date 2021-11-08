import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { PageNotFoundComponent } from './components/pages/errors/page-not-found/page-not-found.component';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { SignUpComponent } from './components/pages/connection/sign-up/sign-up.component';
import { TrendingComponent } from './components/pages/trending/trending.component';
import { ConnectionComponent } from './components/pages/connection/layout/connection.component';
import { LoginComponent } from './components/pages/connection/login/login.component';

const routes: Routes = [
  {path: "discover", component: DiscoverComponent},
  {path: "", redirectTo: "discover", pathMatch: "full"},
  {path: "trending", component: TrendingComponent},
  {path: "profil", component: ProfilComponent},
  {
    path: "",
    component: ConnectionComponent,
    children: [
      {path: "sign-up", component: SignUpComponent},
      {path: "login", component: LoginComponent}
    ]
  },
  {path: "**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
