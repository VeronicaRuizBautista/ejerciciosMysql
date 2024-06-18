import { connection } from "../../db/connection.js";

//Contar la cantidad de oficinas en cada país
export const getAllQuantityOfficesForEachCountry= async()=>{
    let [result] = await connection.query(`SELECT country, COUNT(*) AS quantityOffices FROM offices GROUP BY country;`);
    return result;
}