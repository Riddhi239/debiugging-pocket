import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PocketModule } from './pocket/pocket.module';

import { AppComponent } from './app.component';
import { PocketCardComponent } from './pocket/pocket-card/pocket-card.component';
import { PocketListComponent } from './pocket/pocket-list/pocket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PocketCardComponent,
    PocketListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PocketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
