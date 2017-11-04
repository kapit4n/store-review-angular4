/**
 * Stock items model
 * @class  Stock
 */
export class Stock {
	constructor(
		public id: any,
		public stock: number,
		public price: number,
		public name: string,
		public img: string,
		public description: string
	) { }
}
