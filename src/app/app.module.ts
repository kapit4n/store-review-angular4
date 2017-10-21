import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';

import { StockServiceService } from './stock-service.service'
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'stock-item',
    component: StockItemComponent,
  }, {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatTableModule
  ],
  providers: [StockServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
