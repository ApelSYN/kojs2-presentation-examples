import query from 'mysql-query-promise';
const productTableName = 'products';

export default {
    getAll: async () => {
        return query(`SELECT * from ${productTableName}`);
    },
    get: async (id) => {
        let products = await query(`SELECT * FROM ${productTableName} WHERE id=?`,[id]),
            product = products[0];
        return product;
    },
    create: async function ({ name, price = 0, currency = 'UAH' }) {
        let product = {name: String(name), price: Number(price), currency: String(currency)};
        let result = await query(`INSERT INTO ${productTableName} SET ?`,[product]);
        product.id = result.insertId;
        return product;
    },
    update: async function ( id, { name, price = 0, currency = 'UAH' }) {
        let product = {name: String(name), price: Number(price), currency: String(currency)};
        let result = await query(`UPDATE ${productTableName} SET ? WHERE id=?`,[product, Number(id)]);
        if (result.affectedRows > 0) {
            product.id = id;
            return product;
        }
    },
    delete: async (id) => {
        let result = await query(`DELETE FROM ${productTableName} WHERE id=?`,[id]);
        return result.affectedRows;
    }
};