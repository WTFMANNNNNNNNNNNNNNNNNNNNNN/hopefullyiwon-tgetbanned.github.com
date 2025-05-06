let { rock } = require('../tiles/decoration.js'),
    { wall: WALL, normal: ____, normalNoFood: F___, nest, nestNoFood: nesf, water: watr, fovwall: FWAL } = require('../tiles/misc.js'),

room = [
    [rock,F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___,rock],
    [F___,FWAL,F___,____,F___,____,WALL,WALL,WALL,____,WALL,rock,F___,____,F___,WALL,F___,FWAL,F___],
    [____,F___,____,F___,WALL,F___,WALL,F___,____,F___,____,WALL,WALL,WALL,____,WALL,____,F___,____],
    [F___,____,F___,WALL,F___,rock,F___,____,WALL,____,F___,WALL,F___,____,F___,____,WALL,____,WALL],
    [WALL,WALL,____,WALL,____,F___,____,F___,WALL,F___,____,F___,____,F___,____,WALL,rock,F___,WALL],
    [F___,rock,F___,rock,F___,WALL,F___,WALL,WALL,WALL,WALL,____,WALL,WALL,F___,WALL,F___,rock,F___],
    [____,F___,rock,F___,____,WALL,rock,F___,rock,F___,rock,F___,rock,WALL,____,F___,rock,F___,____],
    [F___,rock,F___,rock,F___,WALL,F___,nest,nesf,nest,nesf,nest,F___,WALL,WALL,____,WALL,WALL,F___],
    [____,F___,____,WALL,WALL,WALL,rock,nesf,nest,nesf,nest,nesf,rock,WALL,watr,watr,watr,WALL,____],
    [WALL,____,F___,____,F___,____,F___,nest,nesf,nest,nesf,nest,F___,____,watr,watr,watr,____,F___],
    [WALL,F___,WALL,F___,____,WALL,rock,nesf,nest,nesf,nest,nesf,rock,WALL,watr,watr,watr,WALL,____],
    [F___,____,WALL,____,F___,WALL,F___,nest,nesf,nest,nesf,nest,F___,WALL,WALL,____,WALL,WALL,F___],
    [____,WALL,____,WALL,____,WALL,rock,F___,rock,F___,rock,F___,rock,WALL,____,F___,____,F___,rock],
    [F___,____,F___,WALL,F___,WALL,WALL,____,WALL,WALL,WALL,WALL,F___,WALL,F___,WALL,WALL,____,WALL],
    [____,F___,rock,F___,____,F___,____,F___,____,WALL,____,F___,____,F___,____,F___,____,F___,____],
    [WALL,rock,F___,WALL,F___,____,F___,____,F___,____,F___,____,F___,WALL,WALL,WALL,F___,WALL,F___],
    [____,F___,____,F___,WALL,F___,watr,watr,____,F___,rock,F___,____,WALL,____,F___,____,F___,____],
    [F___,FWAL,F___,____,WALL,____,watr,watr,F___,____,WALL,rock,F___,WALL,F___,____,F___,FWAL,F___],
    [rock,F___,____,F___,____,F___,____,F___,____,WALL,WALL,WALL,____,F___,____,WALL,____,F___,rock]
];

module.exports = room;