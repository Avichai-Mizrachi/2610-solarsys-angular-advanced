import type { Product } from './product';

export class ShoppingCartService {
    getTotal(products: Product[]): number {
        let res = 0;

        for (const product of products) {
            res = res + product.price * product.quantity;
        }

        return res;
    }
}

const sampleData: Product[] = [
    { name: 'Book', price: 10, quantity: 2 }, 
    { name: 'Pen', price: 2, quantity: 5 }, 
    { name: 'Notebook', price: 5, quantity: 3 }
];

const service = new ShoppingCartService();
const total = service.getTotal(sampleData);
console.log('The total amount is', total);
