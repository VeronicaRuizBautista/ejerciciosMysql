import { connection } from "../../db/connection.js";

//Listar todas las órdenes que tienen un estado de Enviado
export const getAllOrdersWithStatusSHipped= async()=>{
    let [result] = await connection.query(`SELECT * FROM orders WHERE status = 'Shipped';`);
    return result;
}