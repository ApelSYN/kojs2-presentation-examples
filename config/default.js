module.exports = {
    app: {
        name: 'simpleCRUDKoa2App',
        version: '0.0.1'
    },
    server: {
        port: 3001
    },
    product: {
        tableName: 'products'
    },
    database: {
        master: {
            host: "localhost",
            user: "root",
            password: "",
            port: "3306",
            database: "koa2",
            connectionLimit: 3
        }
    }
};