
const maths = require('./helpers/maths');
const {base, list, until} = require('./config/yargs');

console.clear();

maths.multiplingTable(base, list, until)
    .then((fileName) => console.log(`${fileName} created`))
    .catch(console.log);
