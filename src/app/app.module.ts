import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'stock-item',
        component: StockItemComponent,
    },{
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
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
