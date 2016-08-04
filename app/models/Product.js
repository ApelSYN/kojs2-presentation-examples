class Product {
    constructor({
        product_id:id,
        product_name:name,
        price,
        currency = 'UAH'
    }) {
        this.id = Number(id);
        this.name = name;
        this.price = Number(price) || 0;
        this.currency = currency.toString()
    }
    toDB() {
        return {
            product_id:   this.id,
            product_name: this.name,
            price:        this.price,
            currency:     this.currency
        }
    }
}

export default {
    getProducts: async (productId) => {
        // return query();
        return [new Product({id:1}),new Product({id:2})]
    },
    getProduct: async (productId) => {
        // return query();
        return new Product({id:1})
    }
}