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
        
        console.log('before inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'purchaseAmount',
            message: 'PLEASE SELECT THE ID OF THE ITEM YOU WOULD LIKE TO PURCHASE'
        }
    ])
    .then(function(answers) {
        if (answers.amount);
        else { }
    });
    })
};



