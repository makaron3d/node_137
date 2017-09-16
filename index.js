var os = require('os');
var fs = require("fs"),
    path = require("path"),
    colors = require('colors'),
    StatMode = require('stat-mode'),
    p = "./",
    a = "./array.txt";

process.stdin.setEncoding('utf-8');


fs.readdir(p, function (err, files, data) {
    if (err) {
        throw err;
    }
    console.log(files);
    //var array = files;
    //console.log(data);
    fs.writeFile(a, files, function (err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
        console.log(files);
        fs.readFile(a, 'utf-8', function (err, data) {
            console.log('Po zapisaniu:'.red);
            console.log(data);
        });
    });
});


/*
fs.stat('./cat.jpg', function(err, stats) {
    //console.log(stats);
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
*/
/*
fs.readFile('./tekst.txt', function(err, data) {
    console.log(data);
});
*/

/*

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!'.green, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue);
            console.log(data);
        });
    });
});

*/



