import { connection } from "../../db/connection.js";

//Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103
export const getAllPaymentsdetailByCustomer = async(id = 103)=>{
    let [result] = await connection.execute(` SELECT * FROM payments WHERE customerNumber = ?`, [id]);
    return result;
}

//Listar el monto total de los pagos recibidos de cada cliente
export const getTotalPaymentForEachCustomer = async()=>{
    let [result] = await connection.execute(` SELECT customers.customerName, SUM(payments.amount) AS totalPayments FROM customers JOIN payments  ON customers.customerNumber = payments.customerNumber GROUP BY customers.customerName;`);
    return result;
}

//Calcular el total de pagos recibidos
export const getTotalPayments = async()=>{
    let [result] = await connection.execute(`SELECT SUM(amount) AS totalPayments FROM payments;`);
    return result;
}