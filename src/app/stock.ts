/**
 * Stock items model
 * @class  Stock
 */
export class Stock {
	constructor(
		public inStock: number,
		public price: number,
		public name: string,
		public icon: string,
		public description: string
	) { }
}
