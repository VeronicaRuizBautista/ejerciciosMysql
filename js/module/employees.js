import { connection } from "../../db/connection.js";

//**Encontrar todos los empleados que trabajan en la oficina de San Francisco
export const getAllEmployeesWithOfficeInSanFrancisco = async()=>{
    let [result] = await connection.query(` SELECT * FROM employees WHERE officeCode = 1;`);
    return result;
}

//Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143
export const getAllEmployeesByreportTo = async(id = 1143)=>{
    let [result] = await connection.query(` SELECT firstName, email FROM employees WHERE reportsTo = ?`, [id]);
    return result;
}