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