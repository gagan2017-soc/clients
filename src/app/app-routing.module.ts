import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageContact} from './page-admin-display/page-contact';


const routes: Routes = [
  { path:  'app', redirectTo:  '/home-page', pathMatch:  'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
