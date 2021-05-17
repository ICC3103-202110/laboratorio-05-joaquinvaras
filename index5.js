const { printTable } = require('console-table-printer');
var figlet = require('figlet');
const chalk = require('chalk');


figlet('Tip calculator app', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.green(data));

});

var billamount;
var tipc
var tip
var t

process.stdout.write("bill amount? : ");
process.stdin.on("data", function(data){
    billamount = data.toString();
    process.stdout.write("tip (%) : ");
    process.stdin.on("data", function(data){
        tipc = data.toString()
    })
    
    const plata = {
        bill_amount: billamount,
        "tip(%)": tipc,
        tip: 1500,
        total: t
    }
    
    console.table([plata])
    process.exit();
})




function total(x,y){
    return x+y
}
const testCases = [
    { Bill_amount: billamount, "tip(%)": tipc, tip: 100, total: total(billamount,tip) },
  ];

  printTable(testCases);








