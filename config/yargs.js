const argv = require('yargs')
                // aquí configurem la variable d'entrada b (base)
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: `It's the base of the multiplying table`
                    },
                    'l': {
                        alias: 'list',
                        type: 'boolean',
                        demandOption: false,
                        dafault: false,
                        describe: `Show the table in console`
                    },
                    'u': {
                        alias: 'until',
                        type: 'number',
                        demandOption: false,
                        dafault: 10,
                        describe: `Number until the base will be multiplied`
                    }
                })
                // aquí podem fer validacions extra
                .check((argv, options) => {
                    if (isNaN(argv.b)) throw 'The base must be number';
                    else return true;                    
                })
                .argv;


module.exports = argv;