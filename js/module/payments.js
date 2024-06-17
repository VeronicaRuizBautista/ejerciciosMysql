import { connection } from "../../db/connection.js";

//Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103
export const getAllPaymentsdetailByCustomer = async(id = 103)=>{
    let [result] = await connection.execute(` SELECT * FROM payments WHERE customerNumber = ?`, [id]);
    return result;
}