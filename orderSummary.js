var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  }

orderSum = 0;
orderSumWithVat = 0;

for (let i = 0; i < tellimus.rows.length; i++) {
    item = tellimus.rows[i].name;
    amount = tellimus.rows[i].amount;
    priceWithoutVat = Math.round(tellimus.rows[i].price*100)/100;
    vatPercentage = Math.round(tellimus.rows[i].vat*100)/100;
    vat = priceWithoutVat * vatPercentage;
    price = priceWithoutVat + vat;
    sumWithoutVat = Math.round((priceWithoutVat * amount)*100)/100;
    Sum = Math.round((price * amount)*100)/100;

    orderSum += priceWithoutVat;
    orderSumWithVat += Sum;

    console.log("Item name: " + item + '\n' + "Price " + priceWithoutVat + '\n' + "Amount: " + amount + '\n' + "Sum: " + sumWithoutVat);
}

vatTotal = Math.round((orderSumWithVat - orderSum)*100)/100;

console.log("Order sum is " + orderSumWithVat + " euros including vat " + vatTotal + " euros.");