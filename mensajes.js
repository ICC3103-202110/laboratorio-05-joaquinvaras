const { printTable } = require('console-table-printer');
var figlet = require('figlet');
const chalk = require('chalk');
require('colors')

const showinterface = () => {

    console.clear
    figlet('Tip calculator app', function(err, data) {
        console.log(chalk.green(data))})

        const readline = requiere('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question('bill amount? : ', (opt) => {
            console.log({ opt })
            readline.close()
        })
}





module.exports = {
    showinterface
}