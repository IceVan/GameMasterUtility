import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DndComponent } from './dnd/dnd.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dnd', component: DndComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
