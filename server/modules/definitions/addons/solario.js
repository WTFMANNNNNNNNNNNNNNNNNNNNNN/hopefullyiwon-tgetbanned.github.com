const { combineStats, makeDeco } = require('../facilitators.js');
const { base, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

Class.solarioTurret1 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 13,
    SHAPE: 0,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard, g.autoTurret, { reload: 1.3 }]),
                TYPE: "trap"
            },
        },
    ],
}
Class.solarioRingTurret = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: 13,
    HAS_NO_RECOIL: true,
    MIRROR_MASTER_ANGLE: true,
    GUNS: [{
            POSITION: [10, 8, 0, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.emplaser, g.autoTurret, { reload: 2, speed: 2, maxSpeed: 2 }]),
                TYPE: ["laser", { ARENA_CLOSER: true }],
                AUTOFIRE: true
            },
    }, {
            POSITION: [24, 1, 1, 0, 0, 180, 2 / 3],
            PROPERTIES: {
                COLOR: 'red',
            },
        }],
}
Class.solarioCircAttack = {
  PARENT: "bullet",
  SHAPE: "M 1 0 A 1 1 0 0 0 -1 0 A 1 1 0 0 0 0 1 L 0 0.95 A 0.95 0.95 0 0 1 0 -0.95 A 0.95 0.95 0 0 1 0.95 0 L 1 0",
  FACING_TYPE: ["spin", { speed: 0.02 }],
  MOTION_TYPE: ["grow", { growSpeed: 2 }],
  ARENA_CLOSER: true
}
Class.solarioTurret2 = {
    PARENT: "genericTank",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    LABEL: "Turret",
    COLOR: 13,
    SHAPE: 3,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.autoTurret, { reload: 1.5 }]),
                TYPE: "bullet"
            },
        },
    ],
}
Class.solarioTurret3 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    SHAPE: 4,
    COLOR: 13,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.power]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.power]),
                TYPE: "bullet"
            },
        },
    ],
}
Class.solarioTurret4 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 13,
    SHAPE: 6,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.autoTurret]),
                TYPE: "bullet"
            },
        },
    ],
}
Class.solariominilaser = {
    PARENT: "genericTank",
    LABEL: "Solario SMG",
    DANGER: 6,
    HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.doublereload, g.one_third_reload]),
                TYPE: "laser",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.doublereload, g.one_third_reload]),
                TYPE: "laser",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.doublereload, g.one_third_reload]),
                TYPE: "laser",
            },
        },
        {
            POSITION: [24, 1, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 'red',
                SHOOT_SETTINGS: combineStats([g.fake]),
                TYPE: "laser",
            },
        }
    ],
}
Class.solarioturretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.6 A 1.5 1.5 0 0 0 0 1.6 A 1.5 1.5 0 0 0 0 -1.6 Z M 0 -1.5 A 0.001 0.001 0 0 1 0 1.5 A 0.001 0.001 0 0 1 0 -1.5',
    COLOR: 13,
    SYNC_TURRET_SKILLS: true,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 15, 0, 90, 220, 1],
        TYPE: "solarioTurret1",
    }, {
        POSITION: [5, 15, 0, 180, 220, 1],
        TYPE: "solarioTurret2",
    }, {
        POSITION: [5, 15, 0, 270, 220, 1],
        TYPE: "solarioTurret3",
    }, {
        POSITION: [5, 15, 0, 0, 220, 1],
        TYPE: "solarioTurret4",
    }]
}
Class.solarioturretBase2ndRing = {
    LABEL: "Base",
    SHAPE: 'M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3',
    COLOR: 13,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 30, 0, 90, 220, 1],
        TYPE: "solarioTurret1",
    }, {
        POSITION: [5, 30, 0, 180, 220, 1],
        TYPE: "solarioTurret2",
    }, {
        POSITION: [5, 30, 0, 270, 220, 1],
        TYPE: "solarioTurret3",
    }, {
        POSITION: [5, 30, 0, 0, 220, 1],
        TYPE: "solarioTurret4",
    }]
}
Class.solarioRingAttack = {
    LABEL: "Base",
    SHAPE: 'M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3',
    COLOR: 13,
    BODY: {
        PUSHABILITY: 0,
        RANGE: 300,
    },
    ARENA_CLOSER: true,
    DIE_AT_RANGE: true,
    MOTION_TYPE: "solarioarena",
    FACING_TYPE: ["spin", { speed: 0.3 }],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [3, 30, 0, 270, 0, 1],
        TYPE: "solarioRingTurret",
    }, {
        POSITION: [3, 30, 0, 0, 0, 1],
        TYPE: "solarioRingTurret",
    }, {
        POSITION: [3, 30, 0, 90, 0, 1],
        TYPE: "solarioRingTurret",
    }, {
        POSITION: [3, 30, 0, 180, 0, 1],
        TYPE: "solarioRingTurret",
    }]
}
Class.solarioturretBase2 = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.6 A 1.5 1.5 0 0 0 0 1.6 A 1.5 1.5 0 0 0 0 -1.6 Z M 0 -1.5 A 0.001 0.001 0 0 1 0 1.5 A 0.001 0.001 0 0 1 0 -1.5',
    COLOR: 33,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 15, 0, 90, 220, 1],
        TYPE: ["solarioTurret1", { COLOR: 33 }],
    }, {
        POSITION: [5, 15, 0, 180, 220, 1],
        TYPE: ["solarioTurret2", { COLOR: 33 }],
    }, {
        POSITION: [5, 15, 0, 270, 220, 1],
        TYPE: ["solarioTurret3", { COLOR: 33 }],
    }, {
        POSITION: [5, 15, 0, 0, 220, 1],
        TYPE: ["solarioTurret4", { COLOR: 33 }],
    }]
}
Class.solarioturretBase2ndRing2 = {
    LABEL: "Base",
    SHAPE: 'M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3',
    COLOR: 33,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 30, 0, 90, 220, 1],
        TYPE: ["rocketeerTurret", { COLOR: 33, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 30, 0, 180, 220, 1],
        TYPE: ["boomerTurret", { COLOR: 33, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 30, 0, 270, 220, 1],
        TYPE: ["barricadeTurret", { COLOR: 33, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 30, 0, 0, 220, 1],
        TYPE: ["bigauto4gun", { COLOR: 33, HAS_NO_RECOIL: true }],
    }]
}
Class.solarioturretBase3 = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.6 A 1.5 1.5 0 0 0 0 1.6 A 1.5 1.5 0 0 0 0 -1.6 Z M 0 -1.5 A 0.001 0.001 0 0 1 0 1.5 A 0.001 0.001 0 0 1 0 -1.5',
    COLOR: 32,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 15, 0, 90, 220, 1],
        TYPE: ["solarioTurret1", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 15, 0, 180, 220, 1],
        TYPE: ["solarioTurret2", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 15, 0, 270, 220, 1],
        TYPE: ["solarioTurret3", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 15, 0, 0, 220, 1],
        TYPE: ["solarioTurret4", { COLOR: 32, HAS_NO_RECOIL: true }],
    }]
}
Class.solarioturretBase2ndRing3 = {
    LABEL: "Base",
    SHAPE: 'M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3',
    COLOR: 32,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 30, 0, 90, 220, 1],
        TYPE: ["rocketeerTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 30, 0, 180, 220, 1],
        TYPE: ["boomerTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 30, 0, 270, 220, 1],
        TYPE: ["barricadeTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 30, 0, 0, 220, 1],
        TYPE: ["bigauto4gun", { COLOR: 32, HAS_NO_RECOIL: true }],
    }]
}
Class.solarioturretBase3rdRing3 = {
    LABEL: "Base",
    SHAPE: 'M 0 -4.8 A 4.5 4.5 90 0 0 0 4.8 A 4.5 4.5 90 0 0 0 -4.8 Z M 0 -4.5 A 0.001 0.001 90 0 1 0 4.5 A 0.001 0.001 90 0 1 0 -4.5',
    COLOR: 32,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 47, 0, 60, 220, 1],
        TYPE: ["machineTripleTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 47, 0, 120, 220, 1],
        TYPE: ["launcherTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 47, 0, 180, 220, 1],
        TYPE: ["skimmerTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 47, 0, 240, 220, 1],
        TYPE: ["twisterTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 47, 0, 300, 220, 1],
        TYPE: ["nailgunTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }, {
        POSITION: [5, 47, 0, 0, 220, 1],
        TYPE: ["artilleryTurret", { COLOR: 32, HAS_NO_RECOIL: true }],
    }]
}
Class.solarioOutline = makeDeco("M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3", 13)
Class.solariobase = {
    PARENT: "genericBoss",
    HAS_NO_RECOIL: true,
    LABEL: "Solario",
    SHAPE: 0,
    BODY: {
        HEALTH: 8000,
    },
    SIZE: 15,
    DANGER: 15,
}
Class.solario = {
    PARENT: "solariobase",
    COLOR: 13,
    GLOW: {
        RADIUS: 50,
        COLOR: 13,
        ALPHA: 1,
        RECURSION: 8
    },
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 0],
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "startlaserattack"
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 75 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "solarioAttack"
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenade_explosion, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 5, pen: 3 }]),
                TYPE: "solarioCircAttack",
                ALT_FIRE: true,
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 1.4, reload: 5 }]),
                TYPE: "solarioRingAttack",
                ALT_FIRE: true
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, {speed: 0.01, maxSpeed: 0.01, health: 99999, pen: 99, density: 38281381283, resist: 421848412}]),
                TYPE: ["blackholeondeath", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
                ALT_FIRE: true
            }
        },
          ],
    TURRETS: [{
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase",
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase2ndRing",
    }, {
        POSITION: [16, 0, 0, 0, 360, 3],
        TYPE: ["minilaser", { HAS_NO_RECOIL: true, CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]}]
    }, {
        POSITION: [8.2, 0, 0, 0, 360, 2],
        TYPE: "solarioOutline"
    },
  ],
    ON: [
          {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'startlaserattack') {
                    sockets.broadcast('Solario: DODGE THIS!!');
                    setTimeout(() => body.define('solariolaser'), 1000);
                }
                if (gun.identifier == 'solarioAttack') {
                    body.guns[3].canShoot = false;
                    let attack = ~~(Math.random() * 2);
                    switch(attack) {
                        case 0:
                            body.guns[4].fire();
                            setTimeout(() => { if (body != null) body.guns[4].fire(); }, 12000);
                        break;
                        case 1:
                            body.guns[5].fire();
                        break;
                    }
                }
        }
        }, {
            event: "death",
            handler: ({}) => {
                sockets.broadcast('NOOOOOOO!')
            }
        }, {
            event: "damage",
            handler: ({ body }) => {
                if (body.health.amount < (body.health.max / 3) * 2) {
                    sockets.broadcast('Solario: YOU CANT STOP ME!!!!!');
                    body.define('solariophase2');
                }
            }
        }
    ],
}
Class.solariolaser = {
    PARENT: "solariobase",
    COLOR: 13,
    GLOW: {
        RADIUS: 50,
        COLOR: 13,
        ALPHA: 1,
        RECURSION: 8
    },
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 360, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 180, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "endlaserattack",
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, {speed: 0.01, maxSpeed: 0.01, health: 99999, pen: 99, density: 38281381283, resist: 421848412}]),
                TYPE: "blackholeondeath",
                SHOOT_ON_DEATH: true,
                ALT_FIRE: true
            }
        },
  ],
  TURRETS: [{
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase",
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase2ndRing",
    }, {
        POSITION: [16, 0, 0, 0, 360, 3],
        TYPE: ["minilaser", { HAS_NO_RECOIL: true, CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]}]
    }, {
        POSITION: [8.2, 0, 0, 0, 360, 2],
        TYPE: "solarioOutline"
    },
  ],
    ON: [
        {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'endlaserattack') {
                    sockets.broadcast('Solario: RAHH!');
                    body.children = [];
                    setTimeout(() => body.define('solario'), 500);
                }
            }
        }, {
            event: "death",
            handler: ({}) => {
                sockets.broadcast('NOOOOOOO!')
            }
        }, {
            event: "damage",
            handler: ({ body }) => {
                if (body.health.amount < (body.health.max / 3) * 2) {
                    sockets.broadcast('Solario: YOU CANT STOP ME!!!!!');
                    body.define('solariolaserphase2');
                }
            }
        }
    ],
};
Class.solariophase2 = {
    PARENT: "solariobase",
    COLOR: 33,
    GLOW: {
        RADIUS: 50,
        STRENGTH: 30,
        COLOR: 33,
        ALPHA: 0.8,
        RECURSION: 8
    },
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 90, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 270, 0],
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "startlaserattack",
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 75 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "solarioAttack"
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenade_explosion, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 5, pen: 3 }]),
                TYPE: ["solarioCircAttack", { COLOR: 33}],
                ALT_FIRE: true,
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 1.4, reload: 5 }]),
                TYPE: ["solarioRingAttack", { COLOR: 33}],
                ALT_FIRE: true
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, { health: 4, size: 2 }]),
                TYPE: "baseThrower",
                ALT_FIRE: true
            }
           }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, {speed: 0.01, maxSpeed: 0.01, health: 99999, pen: 99, density: 38281381283, resist: 421848412}]),
                TYPE: "blackholeondeath",
                SHOOT_ON_DEATH: true,
                ALT_FIRE: true
            }
        },
        ],
    TURRETS: [{
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: ["solarioturretBase2", { COLOR: 33 }],
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: ["solarioturretBase2ndRing2", { COLOR: 33 }],
    }, {
        POSITION: [16, 0, 0, 0, 360, 3],
        TYPE: ["minilaser", { HAS_NO_RECOIL: true, CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]}]
    }, {
        POSITION: [8.2, 0, 0, 0, 360, 2],
        TYPE: ["solarioOutline", { COLOR: 33 }]
    },
  ],
    ON: [
{
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'startlaserattack') {
                    sockets.broadcast('Solario: DODGE THIS!!');
                    setTimeout(() => body.define('solariolaserphase2'), 1000);
                }
                if (gun.identifier == 'solarioAttack') {
                    body.guns[3].canShoot = false;
                    let attack = ~~(Math.random() * 3);
                    switch(attack) {
                        case 0:
                            body.guns[6].fire();
                            setTimeout(() => { if (body != null) body.guns[6].fire(); }, 6000);
                            setTimeout(() => { if (body != null) body.guns[6].fire(); }, 12000);
                        break;
                        case 1:
                            body.guns[7].fire();
                        break;
                        case 2:
                            body.guns[8].fire();
                            setTimeout(() => { if (body != null) body.guns[8].fire(); }, 500);
                            setTimeout(() => { if (body != null) body.guns[8].fire(); }, 1000);
                            setTimeout(() => { if (body != null) body.guns[8].fire(); }, 1500);
                        break;
                    }
                }
        }
        }, {
            event: "death",
            handler: ({}) => {
                sockets.broadcast('NOOOOOOO!')
            }
        }, {
            event: "damage",
            handler: ({ body }) => {
                if (body.health.amount < body.health.max / 3) {
                    sockets.broadcast('Solario: GRRRAAAAAH, THATS IT!!!!!');
                    body.define('solariophase3');
                }
            }
        }, 
    ],
};
Class.solariolaserphase2 = {
    PARENT: "solariophase2",
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 90, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 270, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 360, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 90, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 180, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 270, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "endlaserattack",
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, {speed: 0.01, maxSpeed: 0.01, health: 99999, pen: 99, density: 38281381283, resist: 421848412}]),
                TYPE: "blackholeondeath",
                SHOOT_ON_DEATH: true,
                ALT_FIRE: true
            }
        },
  ],
    ON: [
        {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'endlaserattack') {
                    sockets.broadcast('Solario: RAHH!');
                    setTimeout(() => body.define('solariophase2'), 500);
                }
            }
        }, {
            event: "death",
            handler: ({ body }) => {
                sockets.broadcast('NOOOOOOO!')
            }
        }, {
            event: "damage",
            handler: ({ body }) => {
                if (body.health.amount < body.health.max / 3) {
                    sockets.broadcast('Solario: GRRRAAAAAH, THATS IT!!!!!');
                    body.define('solariolaserphase3');
                }
            }
        },
    ],
}
Class.solariophase3 = {
    PARENT: "solariobase",
    SKILL_CAP: Array(10).fill(12),
    SKILL: Array(10).fill(12),
    COLOR: 32,
    GLOW: {
        RADIUS: 60,
        STRENGTH: 32,
        COLOR: 32,
        ALPHA: 1,
        RECURSION: 10
    },
    GUNS: [{
        POSITION: [15, 20, 1, 0, 0, 0, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 60, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 120, 0],
    }, {
        POSITION: [15, 20, 1, 0, 0, 180, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 240, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 300, 0],
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "startlaserattack",
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 75 }]), // reload: 75
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "solarioAttack"
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenade_explosion, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 5, pen: 3 }]),
                TYPE: ["solarioCircAttack", { COLOR: 32 }],
                ALT_FIRE: true,
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 1.4, reload: 5 }]),
                TYPE: ["solarioRingAttack", { COLOR: 32 }],
                ALT_FIRE: true
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, { health: 10, size: 2.5 }]),
                TYPE: "baseThrower",
                ALT_FIRE: true
            }
           }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, {speed: 0.01, range: 7, maxSpeed: 0.01, health: 99999, pen: 99, density: 38281381283, resist: 421848412}]),
                TYPE: ["blackholeondeath", { PERSISTS_AFTER_DEATH: true }],
                ALT_FIRE: true,
                SHOOT_ON_DEATH: true
            }
        },
        ],
    TURRETS: [{
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: ["solarioturretBase3", { COLOR: 32 }],
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: ["solarioturretBase2ndRing3", { COLOR: 32 }],
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: ["solarioturretBase3rdRing3", { COLOR: 32 }],
    }, {
        POSITION: [16, 0, 0, 0, 360, 3],
        TYPE: ["minilaser", { HAS_NO_RECOIL: true, CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]}]
    }, {
        POSITION: [8.2, 0, 0, 0, 360, 2],
        TYPE: ["solarioOutline", { COLOR: 32 }]
    }, {
        POSITION: [10, 0, 0, 0, 360, -1],
        TYPE: ["solarioOutline", { COLOR: 32 }]
    },
  ],
    ON: [
{
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'startlaserattack') {
                    sockets.broadcast('Solario: DODGE THIS!!');
                    setTimeout(() => body.define('solariolaserphase3'), 1000);
                }
                if (gun.identifier == 'solarioAttack') {
                    body.guns[3].canShoot = false;
                    let attack = ~~(Math.random() * 3);
                    switch(attack) {
                        case 0:
                            body.guns[8].fire();
                            setTimeout(() => { if (body != null) body.guns[8].fire(); }, 4000);
                            setTimeout(() => { if (body != null) body.guns[8].fire(); }, 8000);
                            setTimeout(() => { if (body != null) body.guns[8].fire(); }, 12000);
                        break;
                        case 1:
                            body.guns[9].fire();
                            setTimeout(() => { if (body != null) body.guns[9].fire(); }, 1000);
                        break;
                        case 2:
                            body.guns[10].fire();
                            setTimeout(() => { if (body != null) body.guns[10].fire(); }, 500);
                            setTimeout(() => { if (body != null) body.guns[10].fire(); }, 1000);
                            setTimeout(() => { if (body != null) body.guns[10].fire(); }, 1500);
                            setTimeout(() => { if (body != null) body.guns[10].fire(); }, 2000);
                            setTimeout(() => { if (body != null) body.guns[10].fire(); }, 2500);
                            setTimeout(() => { if (body != null) body.guns[10].fire(); }, 3000);
                        break;
                    }
                }
        },
        }, {
            event: "death",
            handler: ({ body }) => {
                sockets.broadcast('NOOOOOOO!');
                let o = new Entity(body).define("blackholeondeath")
            }
        }, 
    ],
};
Class.solariolaserphase3 = {
    PARENT: "solariophase3",
    GUNS: [{
        POSITION: [15, 20, 1, 0, 0, 0, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast, { spread: 0, size: 0.6 }]),
            TYPE: "hyperlaser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 60, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 120, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 20, 1, 0, 0, 180, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast, { spread: 0, size: 0.6 }]),
            TYPE: "hyperlaser",
            AUTOFIRE: true,
            COLOR: "red",
        }
    }, {
        POSITION: [15, 10, 1, 0, 0, 240, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 300, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: ["laser", {ARENA_CLOSER: true}],
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [350, 20, 2, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 60, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 120, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 20, 2, 0, 0, 180, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 240, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 300, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "endlaserattack",
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, {speed: 0.01, range: 7, maxSpeed: 0.01, health: 99999, pen: 99, density: 38281381283, resist: 421848412}]),
                TYPE: ["blackholeondeath", { PERSISTS_AFTER_DEATH: true }],
                ALT_FIRE: true,
                SHOOT_ON_DEATH: true,
            }
        },
  ],
    ON: [
        {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'endlaserattack') {
                    sockets.broadcast('Solario: RAHH!');
                    setTimeout(() => body.define('solariophase3'), 500);
                }
            }
        }, {
            event: "death",
            handler: ({ body }) => {
                sockets.broadcast('NOOOOOOO!');
                let o = new Entity(body).define("blackholeondeath")
            }
        }, 
    ],
}
Class.blackholeondeath = {
  PERSISTS_AFTER_DEATH: true,
  COLOR: "black",
  MOTION_TYPE: ["grow", { growSpeed: 1.4 }],
  ARENA_CLOSER: true,
    TYPE: "bullet",
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 99,
        SPEED: 1,
        RANGE: 200,
        DENSITY: 38281381283,
        RESIST: 38281381283,
        HEALTH: 124124,
        DAMAGE: 124124,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
  GUNS: [{
      POSITION: [4, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.magnet]),
          TYPE: ["bullet", { SIZE: 5, ALPHA: 0.5 }],
          AUTOFIRE: true
      },
  }],
  ON: [{
        event: "tick",
        handler: ({ body }) => {
          for (let instance of entities) {
                if (instance.team != body.team && (instance.isPlayer || instance.master.isPlayer || instance.type == "food")) {
                let diffX = instance.x - body.x,
                    diffY = instance.y - body.y,
                    dist2 = diffX ** 2 + diffY ** 2,
                    number1 = 1,
                    number2 = 1,
                    number3 = 1/7,
                    number4 = 1,
                    number5 = 1,
                    distance = 250,
                    forceMulti = (((((body.size / 12)*250) ** 2)** number1) * number2) / dist2;
                if (dist2 <= ((body.size / 12)*250) ** 2) {
                if (instance.id != body.id /*&& !instance.ac && instance.alpha*/) {
                    instance.velocity.x += util.clamp(body.x - instance.x, -90, 90) * instance.damp * ((number5 - (number5/((forceMulti ** number3)* number4)))+ 0.001);//0.05
                    instance.velocity.y += util.clamp(body.y - instance.y, -90, 90) * instance.damp * ((number5 - (number5/((forceMulti ** number3)* number4)))+ 0.001);//0.05
            }
        }
             if (dist2 < body.size ** 2 + instance.size ** 2) {
                if (instance.id != body.id) {
                    instance.isProtected = false;
                    instance.invuln = false;
                    instance.damageReceived = Infinity,
                    instance.kill(),
                    instance.destroy(),
                    instance.removeFromGrid(),
                    instance.isGhost = true;
            }
        }
        }
        }
        }
    },  {
            event: "death",
            handler: ({ body }) => {
            }
        }, 
    ],
}
Class.devBosses.UPGRADES_TIER_0.push('solario', 'solariophase2', 'solariophase3')