

## Parte 1/2



### Consultas de una sola tabla

1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   SELECT productLine, textDescription FROM productlines;
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   SELECT * FROM employees WHERE officeCode = 1;
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   SELECT * FROM orders WHERE status = 'Shipped';
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
   SELECT * FROM payments WHERE customerNumber = 103;
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   SELECT * FROM customers WHERE country = 'USA'AND creditLimit <50000;
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
   SELECT products.productName, productlines.textDescription FROM products INNER JOIN productlines ON products.productLine = productlines.productLine;
   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   SELECT firstName, email FROM employees WHERE reportsTo = 1143;
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   SELECT orders.orderNumber FROM orders INNER JOIN customers ON orders.customerNumber = customers.customerNumber WHERE customers.country = 'France';
   ```
   
4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   SELECT customers.customerName, SUM(payments.amount) AS totalPayments FROM customers JOIN payments  ON customers.customerNumber = payments.customerNumber GROUP BY customers.customerName;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

   ```sql
   SELECT orders.orderNumber, products.productName, orderdetails.quantityOrdered, orderdetails.priceEach FROM  orders  JOIN  orderdetails ON orders.orderNumber = orderdetails.orderNumber JOIN  products ON orderdetails.productCode = products.productCode WHERE  orders.customerNumber = 101;
   ```



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



## Parte 2/2

### Consultas de una sola tabla

1. **Obtener el promedio del límite de crédito de todos los clientes:**

   ```sql
   SELECT AVG(creditLimit) AS averageCreditLimit FROM customers;
   ```

2. **Calcular el total de productos en stock:**

   ```sql
   SELECT SUM(quantityInStock) AS totalProductsInStock FROM products;
   ```

3. **Encontrar el precio medio de compra de todos los productos:**

   ```sql
   SELECT AVG(buyPrice) AS averageBuyPrice FROM products;
   ```

4. **Contar la cantidad de oficinas en cada país:**

   ```sql
   SELECT country, COUNT(*) AS quantityOffices FROM offices GROUP BY country;
   ```

5. **Calcular el total de pagos recibidos:**

   ```sql
   SELECT SUM(amount) AS totalPayments FROM payments;
   ```

6. **Obtener la cantidad total de empleados:**

   ```sql
   SELECT COUNT(*) AS totalEmployees FROM employees;
   ```

7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   ```sql
   SELECT AVG(orderdetails.quantityOrdered) AS averageQuantityOrdered FROM orderdetails;
   ```

8. **Encontrar el precio total de todos los productos:**

   ```sql
   SELECT SUM(products.buyPrice) AS totalPriceProducts FROM products;
   ```

9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   ```sql
   SELECT AVG(products.MSRP) AS averagePriceMSRP FROM products;
   ```

10. **Contar la cantidad de empleados por título de trabajo:**

```sql
SELECT jobTitle, COUNT(*) AS quantityEmployees FROM employees GROUP BY JobTitle;
```

### Consultas de múltiples tablas

1. **Calcular el total de pagos recibidos por cada cliente:**

   ```sql
   SELECT customers.customerName, SUM(payments.amount) AS totalPayments FROM customers JOIN payments ON payments.customerNumber = customers.customerNumber GROUP BY customers.customerNumber;
   ```

2. **Obtener el promedio del límite de crédito de los clientes por país:**

   ```sql
   SELECT country, AVG(customers.creditLimit) AS averageCreditLimit FROM customers GROUP BY country;
   ```

3. **Calcular el total de órdenes realizadas por cada cliente:**

   ```sql
   SELECT customers.customerName, COUNT(*) AS totalOrders FROM orders JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerNumber;
   ```

4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   ```sql
   SELECT customers.customerName, COUNT(*) AS totalProducts FROM orderdetails JOIN orders ON orders.orderNumber  = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerName;
   ```

5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   ```sql
   SELECT customers.customerName, SUM(orderdetails.quantityordered * orderdetails.priceEach) AS totalSales FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerName;
   ```

6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   ```sql
   SELECT products.productLine, AVG(products.quantityInStock) AS averageQuantityProductsInStok FROM products GROUP BY products.productLine;
   ```

7. **Calcular el total de pagos recibidos por cada país:**

   ```sql
   SELECT customers.country, COUNT(*) AS totalPayments FROM payments JOIN customers  ON customers.customerNumber = payments.customerNumber GROUP BY customers.country;
   ```

8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   ```sql
   SELECT employees.firstName,   AVG(orderdetails.quantityordered * orderdetails.priceEach) AS averageSales FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.firstName;
   ```

9. **Calcular el total de órdenes gestionadas por cada empleado:**

   ```sql
   SELECT employees.firstName,   COUNT(*) AS totalOrders FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.firstName;
   ```s

10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

   ```sql
   SELECT products.productLine,  SUM(orderdetails.quantityOrdered) AS quantityProductsSold FROM products JOIN orderdetails ON orderdetails.productCode = products.productCode GROUP BY products.productLine;
   ```

11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

    ```sql
    SELECT customers.customerName, AVG(orderdetails.quantityOrdered) AS averageQuantityProducts FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerName;
    ```

12. **Calcular el total de ventas realizadas en cada país:**

   ```sql
   SELECT customers.country, SUM(orderdetails.quantityOrdered) AS totalSales FROM customers JOIN orders ON customers.customerNumber = orders.customerNumber JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY customers.country ORDER BY totalSales;
   ```

13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    ```sql
    SELECT products.productLine, AVG(products.buyPrice) AS averageBuyPrice FROM products GROUP BY products.productLine;
    ```

14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

   ```sql
   SELECT  employees.employeeNumber, employees.firstName, SUM(orderdetails.quantityOrdered) AS totalQuantitySold FROM  employees JOIN  customers ON employees.employeeNumber = customers.salesRepEmployeeNumber JOIN  orders ON customers.customerNumber = orders.customerNumber JOIN  orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY  employees.employeeNumber, employees.firstName;
   ```

15. **Calcular el total de pagos recibidos por cada vendedor:**

    ```sql
    SELECT employees.employeeNumber, employees.firstName, COUNT(*) AS totalPayments FROM payments JOIN customers ON customers.customerNumber = payments.customerNumber JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.employeeNumber, employees.firstName;
    ```

16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

   ```sql 
   SELECT  employees.employeeNumber,  employees.firstName, AVG(customers.creditLimit) AS averageCreditLimit FROM  employees JOIN  customers ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY  employees.employeeNumber,  employees.firstName;
   ```

17. **Encontrar el total de ventas realizadas por cada oficina:**

   ```sql
   SELECT offices.city, offices.country, SUM(orderdetails.quantityOrdered * orderdetails.priceEach) AS totalSales FROM  offices JOIN  employees ON offices.officeCode = employees.officeCode JOIN  customers ON employees.employeeNumber = customers.salesRepEmployeeNumber JOIN  orders ON customers.customerNumber = orders.customerNumber JOIN  orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY offices.city, offices.country;
   ```

18. **Calcular la cantidad media de productos pedidos por cada cliente:**

   ```sql
   SELECT customers.customerName, AVG(totalProducts) AS averageQuantityOrdered FROM customers JOIN (SELECT orders.customerNumber, SUM(orderdetails.quantityOrdered) AS totalProducts FROM   orders JOIN   orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY   orders.customerNumber ) AS customer_orders ON customers.customerNumber = customer_orders.customerNumber GROUP BY customers.customerName;
   ```

19. **Obtener el total de pagos realizados en cada año:**

   ```sql
   SELECT YEAR(paymentDate) AS paymentYear,  SUM(amount) AS totalPayments FROM  payments GROUP BY  YEAR(paymentDate);
   ```

20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

   ```sql
   SELECT products.productLine,  AVG(orderdetails.priceEach) AS averagePrice FROM  products JOIN  orderdetails ON products.productCode = orderdetails.productCode GROUP BY  products.productLine;
   ```