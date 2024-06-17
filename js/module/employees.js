import { connection } from "../../db/connection.js";

//**Encontrar todos los empleados que trabajan en la oficina de San Francisco
export const getAllEmployeesWithOfficeInSanFrancisco = async()=>{
    let [result] = await connection.query(` SELECT * FROM employees WHERE officeCode = 1;`);
    return result;
}