import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { PageNotFoundComponent } from './components/pages/errors/page-not-found/page-not-found.component';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { SignUpComponent } from './components/pages/connection/sign-up/sign-up.component';
import { TrendingComponent } from './components/pages/trending/trending.component';
import { ConnectionComponent } from './components/pages/connection/layout/connection.component';
import { LoginComponent } from './components/pages/connection/login/login.component';
import { CvListComponent } from './components/pages/cv/cv-list/cv-list.component';
import { CvMakerComponent } from './components/pages/cv/cv-maker/cv-maker.component';
import { PortfolioListComponent } from './components/pages/portfolio/portfolio-list/portfolio-list.component';
import { PortfolioMakerComponent } from './components/pages/portfolio/portfolio-maker/portfolio-maker.component';
import { AuthGuard } from "./gards/authentification/auth/AuthGuard";
import { NotAuthGuard } from './gards/authentification/not-auth/not-auth.guard';


const routes: Routes = [
  {path: "discover", component: DiscoverComponent},
  {path: "", redirectTo: "discover", pathMatch: "full"},
  {path: "trending", component: TrendingComponent},
  {path: "profil", component: ProfilComponent},
  {path: "portfolio-list", component: PortfolioListComponent},
  {path: "portfolio/create", component: PortfolioMakerComponent, canActivate: [AuthGuard]},
  {
    path: "",
    component: ConnectionComponent,
    children: [
      {path: "sign-up", component: SignUpComponent, canActivate: [NotAuthGuard]},
      {path: "login", component: LoginComponent, canActivate: [NotAuthGuard]}
    ]
  },
  {path: "cv-list", component: CvListComponent},
  {path: "cv-maker", component: CvMakerComponent},
  {path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
