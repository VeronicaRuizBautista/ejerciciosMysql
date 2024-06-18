import { connection } from "../../db/connection.js";

//Obtener el promedio de la cantidad de productos en stock por línea de productos
export const getAverageQuantityProductsInStockByProductsLine= async()=>{
    let [result] = await connection.query(`SELECT products.productLine, AVG(products.quantityInStock) AS averageQuantityProductsInStok FROM products GROUP BY products.productLine;`);
    return result;
}

//Obtener el promedio del precio de compra de los productos por línea de productos
export const getAverageBuyPriceProductosByProductsLine= async()=>{
    let [result] = await connection.query(`SELECT products.productLine, AVG(products.buyPrice) AS averageBuyPrice FROM products GROUP BY products.productLine;`);
    return result;
}