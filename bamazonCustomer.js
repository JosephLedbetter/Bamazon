const mysql = require('mysql');
const inquirer = require('inquirer');
const Table = require('cli-table2');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'Donald425@',
    database: 'bamazon_db'
});

connection.connect(function () {
    console.log(`connection running with id ${connection.threadId}`)
    queryBamazonProducts();
});

function queryBamazonProducts() {
    connection.query("Select * From products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log(`${res[i].id} | ${res[i].product} | ${res[i].product_price} | ${res[i].stock_quantity}`)
        }
        console.log("....................");

        console.log('Item inquiry');

        purchasePrompt();
        
        function purchasePrompt(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'purchaseItem',
                    message: 'PLEASE SELECT THE ID OF THE ITEM YOU WOULD LIKE TO PURCHASE',
                },
                {
                    type: 'input',
                    name: 'purchaseAmount',
                    message: 'PLEASE SELECT THE QUANTITY YOU WOULD LIKE TO PURCHASE.',
                }
            ])
            .then(function (answers) {

                let quantitySelected = answers.purchaseAmount;
                let idRequested = answers.purchaseItem;
                console.log('You have selected item number ' + idRequested + ' with a quantity of ' + quantitySelected + ' units.')
                purchaseOrder(idRequested, quantitySelected);
                });

                function purchaseOrder(purchaseItem, purchaseAmount){
                    connection.query(`SELECT * FROM products WHERE id = ${purchaseItem}` , function (err, res){
                        if (err) throw err;
                        if (purchaseAmount <= res[0].stock_quantity){
                            let totalCost = res[0].product_price * purchaseAmount;
                            console.log("................................")
                            console.log(`Good news we have plent of item ${purchaseItem} in stock!`);
                            console.log("................................")
                            console.log(`Your total cost will be ${totalCost}`);
                            console.log("................................")
                            console.log("................................")
                            console.log("Thank you for shopping with Bamazon!")
                            console.log("................................")
                            console.log("................................")
                            console.log("................................")
                            console.log("...UPDATED INVENTORY...")
                            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + purchaseAmount + " WHERE id = " + purchaseItem)}

                        else {console.log(`Insufficient quanitity ${res[0].product}  to complete the order.`);
                    };
                    queryBamazonProducts();
                 });
    }}})}
