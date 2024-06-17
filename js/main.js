import { getAllProductsDescription } from "./module/product.js";
import { 
    getAllEmployeesWithOfficeInSanFrancisco,
    getAllEmployeesByreportTo
} from "./module/employees.js";
import { 
    getAllOrdersWithStatusSHipped,
    getAllOrdersByCustomersCountry
} from "./module/orders.js";
import { getAllPaymentsdetailByCustomer } from "./module/payments.js";
import { getAllCustomersByCountryANdCreditLimit } from "./module/customers.js";
import { getAllProductsWithDescription } from "./module/product.js";


console.log( await getAllOrdersByCustomersCountry())