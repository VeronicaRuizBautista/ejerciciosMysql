import { 
    getAllProductsDescription,
    getTotalProductsInStock,
    getAverageBuyPriceOfAllProducts,
    getAverageQuantityProductsOrederedByOrders,
    getTotalPriceOfAllProducts,
    getAverageSuggestedPriceOfProducts,
    getTotalOrderedProductsForEachCustomer,
    getTotalQuantityProductsSalesForEachProductLine,
    getAverageQuantityProductsForEachCustomer,
    getTotalQuantityProductsSalesForEahSeller
} from "./module/product.js";
import { 
    getAllEmployeesWithOfficeInSanFrancisco,
    getAllEmployeesByreportTo,
    getTotalQuantityEmployees,
    getQuantityEmployeesByJobTitle,
    getAverageSalesForEachEmployee,
    getTotalManagedOrdersForEachEmployee
} from "./module/employees.js";
import { 
    getAllOrdersWithStatusSHipped,
    getAllOrdersByCustomersCountry,
    getAllDetailsOrdersByCustomerNumber,
    getTotalOrdersForEachCustomer,
    getTotalSalesForEachCountry
} from "./module/orders.js";
import { 
    getAllPaymentsdetailByCustomer, 
    getTotalPaymentForEachCustomer,
    getTotalPayments,
    getTotalPaymentsForEachCustumer,
    getTotalPaymentsForEachCountry,
    getTotalPaymentsForEachSeller
} from "./module/payments.js";
import { 
    getAllCustomersByCountryANdCreditLimit,
    getAverageCreditLimitOfAllCustomers,
    getAverageCreditLimitOfCustomersByCountry
 } from "./module/customers.js";
import { getAllProductsWithDescription } from "./module/product.js";
import { getAllQuantityOfficesForEachCountry } from "./module/offices.js";
import { 
    getAverageQuantityProductsInStockByProductsLine,
    getAverageBuyPriceProductosByProductsLine
} from "./module/productLines.js";


console.log( await getAllOrdersByCustomersCountry())