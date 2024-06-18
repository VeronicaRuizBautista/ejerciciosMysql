import { 
    getAllProductsDescription,
    getTotalProductsInStock,
    getAverageBuyPriceOfAllProducts,
    getAverageQuantityProductsOrederedByOrders,
    getTotalPriceOfAllProducts,
    getAverageSuggestedPriceOfProducts
} from "./module/product.js";
import { 
    getAllEmployeesWithOfficeInSanFrancisco,
    getAllEmployeesByreportTo,
    getTotalQuantityEmployees,
    getQuantityEmployeesByJobTitle
} from "./module/employees.js";
import { 
    getAllOrdersWithStatusSHipped,
    getAllOrdersByCustomersCountry,
    getAllDetailsOrdersByCustomerNumber
} from "./module/orders.js";
import { 
    getAllPaymentsdetailByCustomer, 
    getTotalPaymentForEachCustomer,
    getTotalPayments
} from "./module/payments.js";
import { 
    getAllCustomersByCountryANdCreditLimit,
    getAverageCreditLimitOfAllCustomers
 } from "./module/customers.js";
import { getAllProductsWithDescription } from "./module/product.js";
import { getAllQuantityOfficesForEachCountry } from "./module/offices.js";


console.log( await getAllOrdersByCustomersCountry())