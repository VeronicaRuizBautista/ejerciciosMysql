import { getAllProductsDescription } from "./module/product.js";
import { getAllEmployeesWithOfficeInSanFrancisco } from "./module/employees.js";
import { getAllOrdersWithStatusSHipped } from "./module/orders.js";
import { getAllPaymentsdetailByCustomer } from "./module/payments.js";

console.log( await getAllPaymentsdetailByCustomer())