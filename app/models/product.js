import query from 'mysql-query-promise';
const productTableName = 'products'

export default {
    getAll: async () => {
        return query(`SELECT * from ${productTableName}`);
    },
    get: async (id) => {
        let products = query(`SELECT * from ${productTableName} where id=?`,[id]),
            product = products[0];
        return product;
    },
    create: async ({ name, price = 0, currency = 'UAH' }) => {
        let product = {name: String(name), price: Number(price), currency: String(currency)};
        let result = query(`INSERT into ${productTableName} SET ?`,[]);
        product.id = result.insertId;
        return product;
    },
    update: async ( id, { name, price = 0, currency = 'UAH' }) => {
        let product = {id: Number(id), name: String(name), price: Number(price), currency: String(currency)};
        let result = query(`INSERT into ${productTableName} SET ?`,[]);
        product.id = result.insertId;
        return product;
    },
    delete: async (id) => {
        let result = query(`DELETE from ${productTableName} where id=?`,[id]);
        console.log(result);
        return result;
    }
}