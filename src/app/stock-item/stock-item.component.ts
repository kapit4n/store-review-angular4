import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock';


/** Component to show the item details. */
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  paramsSub: any;
  id: any;
  data: Stock;
  
  constructor(private activatedRoute: ActivatedRoute, private stockService: StockServiceService) {
  	this.paramsSub = this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        this.loadData(this.id);
      }
    );
  }

  ngOnInit() {
  }

  loadData(id: any): void {
  	this.stockService.getStockById(id).subscribe(dataRes => this.data = dataRes);
  }
}
