import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GreetingComponent} from "./pages/greeting/greeting.component";

const routes: Routes = [
  {
    path: 'home',
    component: GreetingComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
