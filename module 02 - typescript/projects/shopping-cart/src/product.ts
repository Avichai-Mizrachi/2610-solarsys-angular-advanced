export interface Product {
    name: string;
    price: number;
    quantity: number;
}

export type Discount = {
    type: 'percentage',
    value: number;
} | {
    type: 'fixed',
    amount: number;
};
