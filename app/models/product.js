import query from 'mysql-query-promise';
import config from  'config';
const tableName = config.product.tableName;

const crud = {
    getAll: async () => {
        return query(`SELECT * from ${tableName}`);
    },
    get: async (id) => {
        let products = await query(`SELECT * FROM ${tableName} WHERE id=?`,[id]);
        return products[0];
    },
    create: async function ({ id, name, price = 0, currency = 'UAH' }) {
        let product = {name: String(name), price: Number(price), currency: String(currency)};
        if (Number(id) > 0) product.id = id;
        let result = await query(`INSERT INTO ${tableName} SET ? ON DUPLICATE KEY UPDATE ?`,[product,product]);
        if (result.insertId) id = result.insertId;
        return crud.get(id);
    },
    update: async function ( id, product) {
        if (typeof product === 'object') {
            let uProduct = {};
            if (product.hasOwnProperty('name')) uProduct.name = String(product.name);
            if (product.hasOwnProperty('price')) uProduct.price = Number(product.price);
            if (product.hasOwnProperty('currency')) uProduct.currency = String(product.currency);
            let result = await query(`UPDATE ${tableName} SET ? WHERE id=?`,[uProduct, Number(id)]);
            return result.affectedRows;
        }
    },
    delete: async (id) => {
        let result = await query(`DELETE FROM ${tableName} WHERE id=?`,[id]);
        return result.affectedRows;
    }
};
export default crud;