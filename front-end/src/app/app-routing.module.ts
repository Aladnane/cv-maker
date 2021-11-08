import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/pages/discover/discover.component';

const routes: Routes = [
  {path: "discover", component: DiscoverComponent},
  {path: "", redirectTo: "discover", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
