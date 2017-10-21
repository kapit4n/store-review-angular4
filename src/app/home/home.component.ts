import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock';

/** Component to show the list of stock items. */
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	stocks: Stock[];

	constructor(private stockService: StockServiceService) { }

	ngOnInit() {
		this.loadStock()
	}

	loadStock() {
		this.stockService.getStock()
			.subscribe(
			stocks => this.stocks = stocks,
			err => {
				console.log(err);
			});
	}

}
