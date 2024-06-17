import { connection } from "../../db/connection.js";

//Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:
export const getAllCustomersByCountryANdCreditLimit = async(country = 'USA', creditLimit = 50000)=>{
    let [result] = await connection.query(`SELECT * FROM customers WHERE country = ? AND creditLimit > ?`,[country, creditLimit]);
    return result;
}