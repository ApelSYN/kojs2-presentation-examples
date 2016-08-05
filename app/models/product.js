import query from 'mysql-query-promise';
const productTableName = 'products';

const crud = {
    getAll: async () => {
        return query(`SELECT * from ${productTableName}`);
    },
    get: async (id) => {
        let products = await query(`SELECT * FROM ${productTableName} WHERE id=?`,[id]),
            product = products[0];
        return product;
    },
    create: async function ({ id, name, price = 0, currency = 'UAH' }) {
        let product = {name: String(name), price: Number(price), currency: String(currency)};
        if (Number(id) > 0) product.id = id;
        let result = await query(`INSERT INTO ${productTableName} SET ? ON DUPLICATE KEY UPDATE ?`,[product,product]);
        return crud.get(result.insertId);
    },
    update: async function ( id, product) {
        if (typeof product === 'object') {
            let uProduct = {};
            if (product.hasOwnProperty('name')) uProduct.name = String(product.name);
            if (product.hasOwnProperty('price')) uProduct.price = Number(product.price);
            if (product.hasOwnProperty('currency')) uProduct.currency = Number(product.currency);
            let result = await query(`UPDATE ${productTableName} SET ? WHERE id=?`,[uProduct, Number(id)]);
            return result.affectedRows;
        }
    },
    delete: async (id) => {
        let result = await query(`DELETE FROM ${productTableName} WHERE id=?`,[id]);
        return result.affectedRows;
    }
};
export default crud;