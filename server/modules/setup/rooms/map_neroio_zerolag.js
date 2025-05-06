let { normalNoFood: F___, hookpoint: hook, water: watr } = require('../tiles/misc.js'),

room = [
    [F___,F___,F___,F___,F___,F___,F___,F___],
    [F___,F___,F___,F___,F___,F___,F___,F___],
    [F___,F___,F___,F___,F___,F___,F___,F___],
    [F___,F___,F___,F___,F___,F___,F___,F___],
    [F___,F___,F___,F___,F___,F___,F___,F___],
    [F___,F___,F___,F___,F___,watr,watr,F___],
    [F___,F___,F___,F___,F___,watr,watr,F___],
    [F___,F___,F___,F___,F___,F___,F___,F___]
];

module.exports = room;