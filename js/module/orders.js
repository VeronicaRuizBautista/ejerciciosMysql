import { connection } from "../../db/connection.js";

//Listar todas las órdenes que tienen un estado de Enviado
export const getAllOrdersWithStatusSHipped= async()=>{
    let [result] = await connection.query(`SELECT * FROM orders WHERE status = 'Shipped';`);
    return result;
}

//Encontrar todas las órdenes realizadas por clientes de 'Francia'
export const getAllOrdersByCustomersCountry= async(country = 'France')=>{
    let [result] = await connection.query(`SELECT orders.orderNumber FROM orders INNER JOIN customers ON orders.customerNumber = customers.customerNumber WHERE customers.country = ?`, [country]);
    return result;
}