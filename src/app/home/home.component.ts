import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


/** Component to show the list of stock items. */
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stockDatabase :StockDatabase | any;
  dataSource : StockDataSource | any;
  displayedColumns = ['name', 'inStock', 'price', 'totalPrice'];
	constructor(private stockService: StockServiceService) {
		 this.stockDatabase = new StockDatabase(stockService);
     this.dataSource = new StockDataSource(this.stockDatabase);
	}

	ngOnInit() {
	}
}

export class StockDatabase {
  public dataChange: BehaviorSubject<Stock[]> = new BehaviorSubject<Stock[]>([]);
  get data(): Stock[] { return this.dataChange.value }

  constructor(stockService: StockServiceService) {
    stockService.getStock().subscribe(data => this.dataChange.next(data));
  }
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class StockDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  data: any;
  constructor(private _stockDB: StockDatabase)
  {
  	super();
  }

  connect(): Observable<Stock[]> {
    return this._stockDB.dataChange;

  }

  disconnect() {}
}