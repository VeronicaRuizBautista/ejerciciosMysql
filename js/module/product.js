import { connection } from "../../db/connection.js";

//Recuperar todas las líneas de productos con sus descripciones
export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`SELECT productLine, productDescription FROM products`);
    return result;
}

//Listar todos los productos junto con las descripciones de sus líneas de productos
export const getAllProductsWithDescription = async()=>{
    let [result] = await connection.query(`SELECT products.productName, productlines.textDescription FROM products INNER JOIN productlines ON products.productLine = productlines.productLine;`);
    return result;
}

//Calcular el total de productos en stock
export const getTotalProductsInStock = async()=>{
    let [result] = await connection.query(`SELECT SUM(quantityInStock) AS totalProductsInStock FROM products;`);
    return result;
}

//Encontrar el precio medio de compra de todos los productos
export const getAverageBuyPriceOfAllProducts = async()=>{
    let [result] = await connection.query(`SELECT AVG(buyPrice) AS averageBuyPrice FROM products;`);
    return result;
}

//Calcular la cantidad media de productos pedidos en las órdenes
export const getAverageQuantityProductsOrederedByOrders = async()=>{
    let [result] = await connection.query(`SELECT AVG(orderdetails.quantityOrdered) AS averageQuantityOrdered FROM orderdetails;`);
    return result;
}

//Encontrar el precio total de todos los productos
export const getTotalPriceOfAllProducts = async()=>{
    let [result] = await connection.query(`SELECT SUM(products.buyPrice) AS totalPriceProducts FROM products;`);
    return result;
}

//Calcular el promedio del precio sugerido (MSRP) de los productos
export const getAverageSuggestedPriceOfProducts= async()=>{
    let [result] = await connection.query(`SELECT AVG(products.MSRP) AS averagePriceMSRP FROM products;`);
    return result;
}