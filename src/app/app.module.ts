import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './dnd/navbar/navbar.component';
import { TreasureComponent } from './dnd/treasure/treasure.component';

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    HomeComponent,
    NavbarComponent,
    TreasureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
