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

//Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101
export const getAllDetailsOrdersByCustomerNumber= async(id = 101)=>{
    let [result] = await connection.query(`SELECT orders.orderNumber, products.productName, orderdetails.quantityOrdered, orderdetails.priceEach FROM  orders  JOIN  orderdetails ON orders.orderNumber = orderdetails.orderNumber JOIN  products ON orderdetails.productCode = products.productCode WHERE  orders.customerNumber = ?;`, [id]);
    return result;
}