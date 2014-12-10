
var program = require('commander');
var request = require('request');
var chalk = require('chalk');

module.exports = function GITSEARCH() {

    program
        .version('0.0.1')
        .usage('<keywords>')
        .option('-o --owner [name]', 'Filter by repository owner')
        .option('-l --language [language]', 'Filter by repository language')
        .option('-f --full [full]', 'Full output without any styling (pure JSON)')
        .parse(process.argv);

    if (!program.args.length) {
        program.help();
    } else {

        console.log('\nSearching github for ' + program.args + '...\n');
        var keywords = program.args;
        var url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + keywords;

        if (program.owner) {
            url = url + '+user:' + program.owner;
        }

        if (program.language) {
            url = url + '+language:' + program.language;
        }
    }

    request({
        method: 'GET',
        headers: {
            'User-Agent': 'altescape'
        },
        url: url
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            var body = JSON.parse(body);

            if (!body.items.length) console.log(chalk.black.bgRed(' NO RESULTS FOUND FOR (' + keywords + ') '));

            if (program.full) {
                console.log(body);
            } else {
                for(var i = 0; i < body.items.length; i++) {
                    console.log(chalk.green.bold('Name:  ' + body.items[i].name));
                    console.log(chalk.blue.bold('Owner: ' + body.items[i].owner.login));
                    console.log(chalk.white('       ' + body.items[i].description));
                    console.log(chalk.yellow('       ' + body.items[i].clone_url + '\n'));
                }
            }

            process.exit(0);

        } else if (error) {
            console.log(chalk.red('Error: ' + error));
            process.exit(1);
        }
    });

};