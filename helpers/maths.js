const fs     = require('fs');
require ('colors');

const multiplingTable =
    async(base = 5, list = false, until = 10) => {

    try {
        let exit    = '';
        let consola = '';
        
        for (let i = 1; i <= until; i++) {
            exit += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`.zebra;
        }

        if (list) {
            console.log('======================'.brightCyan);
            console.log(`     TABLE OF ${base}    `.rainbow.bold);
            console.log('======================'.brightGreen);
            console.log(consola);
        }

        const fileName = `table-${base}.txt`;
    
        fs.writeFileSync(`./exit/`+fileName, exit);
        return fileName;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    multiplingTable
}