import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Stock } from './stock';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Service to provide stock items
 * @class  StockServiceService
 */
@Injectable()
export class StockServiceService {

	constructor(private http: Http) { }
	private stocksUrl = 'http://localhost:3000/api/products/getstock';

	getStock(): Observable<Stock[]> {
		return this.http.get(this.stocksUrl)
			.map((res: Response) => res.json().stocks)
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

}
