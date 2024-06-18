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

//Calcular el total de órdenes realizadas por cada cliente
export const getTotalOrdersForEachCustomer= async()=>{
    let [result] = await connection.query(`SELECT customers.customerName, COUNT(*) AS totalOrders FROM orders JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerNumber;`);
    return result;
}

//Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente
export const getTotalSalesForEachCustomer= async()=>{
    let [result] = await connection.query(`SELECT customers.customerName, SUM(orderdetails.quantityordered * orderdetails.priceEach) AS totalSales FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerName;`);
    return result;
}

//Calcular el total de ventas realizadas en cada país
export const getTotalSalesForEachCountry= async()=>{
    let [result] = await connection.query(`SELECT customers.country, SUM(orderdetails.quantityOrdered) AS totalSales FROM customers JOIN orders ON customers.customerNumber = orders.customerNumber JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY customers.country ORDER BY totalSales;`);
    return result;
}