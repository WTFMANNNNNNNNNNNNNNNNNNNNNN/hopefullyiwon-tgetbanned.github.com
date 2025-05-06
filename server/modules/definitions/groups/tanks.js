const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray, makeCeption, makeAura } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4, 
    SKILL_CAP: Array(10).fill(10),
    SKILL: Array(10).fill(10),
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,3
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.twin = {
    PARENT: "genericTank",
    LABEL: "Twin",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sniper = {
    PARENT: "genericTank",
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.machineGun = {
    PARENT: "genericTank",
    LABEL: "Machine Gun",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.flankGuard = {
    PARENT: "genericTank",
    LABEL: "Flank Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: weaponArray({
        POSITION: {
            LENGTH: 18,
            WIDTH: 8
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }, 3)
}
Class.director = {
    PARENT: "genericTank",
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.pounder = {
    PARENT: "genericTank",
    LABEL: "Pounder",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20.5,
                WIDTH: 12
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.trapper = {
    PARENT: "genericTank",
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.desmos = {
    PARENT: "genericTank",
    LABEL: "Desmos",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -90, 0]
        }
    ]
}
Class.smasher = {
    PARENT: "genericSmasher",
    LABEL: "Smasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.healer = {
    PARENT: "genericTank",
    LABEL: "Healer",
    STAT_NAMES: statnames.heal,
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol"
        }
    ],
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 9,
                ASPECT: -0.5,
                X: 12.5
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet"
            }
        }
    ]
}

// Twin upgrades
Class.doubleTwin = {
    PARENT: "genericTank",
    LABEL: "Double Twin",
    DANGER: 6,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.tripleShot = {
    PARENT: "genericTank",
    LABEL: "Triple Shot",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: -2,
                ANGLE: -17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: 2,
                ANGLE: 17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}

// Double Twin upgrades
Class.tripleTwin = {
    PARENT: "genericTank",
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 3)
}
Class.hewnDouble = {
    PARENT: "genericTank",
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        }
    ]
}

// Triple Shot upgrades
Class.pentaShot = {
    PARENT: "genericTank",
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.spreadshot = {
    PARENT: "genericTank",
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.spreadshotMain, g.spreadshot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.bentDouble = {
    PARENT: "genericTank",
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.triplet = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Triplet",
    BODY: {
        FOV: 1.05 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        }
    ]
}

// Sniper upgrades
Class.assassin = {
    PARENT: "genericTank",
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.hunter = {
    PARENT: "genericTank",
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.rifle = {
    PARENT: "genericTank",
    LABEL: "Rifle",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.marksman = {
    PARENT: "genericTank",
    LABEL: "Marksman",
    DANGER: 6,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 18
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}

// Assassin upgrades
Class.ranger = {
    PARENT: "genericTank",
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
}
Class.stalker = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.single = {
    PARENT: "genericTank",
    LABEL: "Single",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ]
}

// Hunter upgrades
Class.predator = {
    PARENT: "genericTank",
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.predator]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.xHunter = {
    PARENT: "genericTank",
    LABEL: "X-Hunter",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 12, -1.2, 7, 0, 0, 0]
        }
    ]
}
Class.dual = {
    PARENT: "genericTank",
    LABEL: "Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, .5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, .75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        }
    ]
}

// Rifle upgrades
Class.musket = {
    PARENT: "genericTank",
    LABEL: "Musket",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.crossbow = {
    PARENT: "genericTank",
    LABEL: "Crossbow",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        }
    ]
}
// Marksman upgrades
Class.deadeye = {
    PARENT: "genericTank",
    LABEL: "Deadeye",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8,
                ASPECT: 1.3,
                X: 10
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8,
                ASPECT: 1.3,
                X: 15
            }
        },
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 8,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, { pen: 2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.nimrod = {
    PARENT: "genericTank",
    LABEL: "Nimrod",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, { pen: 2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 12,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.revolver = {
    PARENT: "genericTank",
    LABEL: "Revolver",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 12
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 7
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.fork = {
    PARENT: "genericTank",
    LABEL: "Fork",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 18
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 23
            }
        },
        {
            POSITION: {
                LENGTH: 29,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, { pen: 2, reload: 3.5 }]),
                TYPE: "forkSplitterBullet"
            }
        }
    ]
}

// Machine Gun upgrades
Class.minigun = {
    PARENT: "genericTank",
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.gunner = {
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sprayer = {
    PARENT: "genericTank",
    LABEL: "Sprayer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}

// Minigun upgrades
Class.streamliner = {
    PARENT: "genericTank",
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.barricade = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}

// Gunner upgrades
Class.nailgun = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}
Class.machineGunner = {
    PARENT: "genericTank",
    LABEL: "Machine Gunner",
    DANGER: 7,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
    ],
}

// Sprayer upgrades
Class.redistributor = {
    PARENT: "genericTank",
    LABEL: "Redistributor",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.atomizer = {
    PARENT: "genericTank",
    LABEL: "Atomizer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }, g.atomizer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.focal = {
    PARENT: "genericTank",
    LABEL: "Focal",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal]),
                TYPE: "bullet",
            },
        },
    ],
}

// Flank Guard upgrades
Class.hexaTank = {
    PARENT: "genericTank",
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: weaponArray({
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    }, 6, 0.5)
}
Class.triAngle = {
    PARENT: "genericTank",
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.auto3 = makeRadialAuto("autoTankGun", {isTurret: true, danger: 6, label: "Auto-3"})

// Hexa Tank upgrades
Class.octoTank = {
    PARENT: "genericTank",
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: weaponArray([
        // Must be kept like this to preserve visual layering
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        }
    ], 4)
}
Class.cyclone = {
    PARENT: "genericTank",
    LABEL: "Cyclone",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        }
    ], 3)
}

// Tri-Angle upgrades
Class.fighter = {
    PARENT: "genericTank",
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.booster = {
    PARENT: "genericTank",
    LABEL: "Booster",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front"
            }
        },
        {
            POSITION: [14, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [14, 8, 1, 0, 1, -140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, -150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        }
    ]
}
Class.surfer = {
    PARENT: "genericTank",
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}

// Auto-3 upgrades
Class.auto5 = makeRadialAuto("autoTankGun", {isTurret: true, danger: 7, label: "Auto-5", count: 5})
Class.mega3 = makeRadialAuto("megaAutoTankGun", {isTurret: true, danger: 7, size: 14, label: "Mega-3", body: {SPEED: 0.95 * base.SPEED}})
Class.auto4 = makeRadialAuto("auto4gun", {isTurret: true, danger: 7, size: 13, x: 6, angle: 45, label: "Auto-4", count: 4})
Class.banshee = makeRadialAuto("bansheegun", {isTurret: true, danger: 7, size: 10, arc: 80, label: "Banshee", body: {SPEED: 0.8 * base.SPEED, FOV: 1.1 * base.FOV}})
Class.banshee.GUNS = weaponArray({
    POSITION: [6, 11, 1.2, 8, 0, 60, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
        TYPE: "drone",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: "drone",
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
    },
}, 3)

// Director upgrades
Class.overseer = {
    PARENT: "genericTank",
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 2)
}
Class.cruiser = {
    PARENT: "genericTank",
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.underseer = {
    PARENT: "genericTank",
    LABEL: "Underseer",
    DANGER: 6,
    NECRO: true,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: weaponArray({
        POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.8}]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
        }
    }, 2)
}
Class.spawner = {
    PARENT: "genericTank",
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
}
Class.manager = {
    PARENT: "genericTank",
    LABEL: "Manager",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer, { reload: 0.5 }]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
            },
        },
    ],
}
Class.bigCheese = {
    PARENT: "genericTank",
    LABEL: "Big Cheese",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigCheese]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 1,
            },
        },
    ],
}

// Overseer upgrades
Class.overlord = {
    PARENT: "genericTank",
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 4)
}
Class.overdrive = {
    PARENT: "genericTank",
    LABEL: "Overdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "turretedDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 4
        }
    }, 2)
}
Class.commander = {
    PARENT: "genericTank",
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        ...weaponArray({
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: "drone",
            },
        }, 3),
        ...weaponArray({
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, 3, 1/3),
    ]
}

// Cruiser upgrades
Class.carrier = {
    PARENT: "genericTank",
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.battleship = {
    PARENT: "genericTank",
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Guided"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Guided"
            }
        }
    ]
}
Class.fortress = {
    PARENT: "genericTank",
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        ...weaponArray(
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, 3, 1/3),
        ...weaponArray([
            {
                POSITION: [14, 9, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [4, 9, 1.5, 14, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5, speed: 0.7, maxSpeed: 0.7 }]),
                    TYPE: "trap",
                    STAT_CALCULATOR: "trap",
                },
            }
        ], 3)
    ],
}

// Underseer upgrades
Class.necromancer = {
    PARENT: "genericTank",
    LABEL: "Necromancer",
    DANGER: 7,
    NECRO: true,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: weaponArray({
        POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
        },
    }, 4, 0.75),
}
Class.maleficitor = {
    PARENT: "genericTank",
    LABEL: "Maleficitor",
    DANGER: 7,
    NECRO: true,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
                TYPE: [
                    "sunchip",
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            },
        },
    ],
}
Class.infestor = {
    PARENT: "genericTank",
    LABEL: "Infestor",
    DANGER: 7,
    NECRO: true,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 20,
    GUNS: weaponArray([
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.5}]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            }
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.5}]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            }
        }
    ], 2)
}

// Spawner upgrades
Class.factory = {
    PARENT: "genericTank",
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                MAX_CHILDREN: 6,
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
}

// Pounder upgrades
Class.destroyer = {
    PARENT: "genericTank",
    LABEL: "Destroyer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.artillery = {
    PARENT: "genericTank",
    LABEL: "Artillery",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.launcher = {
    PARENT: "genericTank",
    LABEL: "Launcher",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher]),
                TYPE: "minimissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.shotgun = {
    PARENT: "genericTank",
    LABEL: "Shotgun",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
}

// Destroyer upgrades
Class.annihilator = {
    PARENT: "genericTank",
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
                TYPE: "bullet",
            },
        },
    ],
}

// Artillery upgrades
Class.mortar = {
    PARENT: "genericTank",
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.ordnance = {
    PARENT: "genericTank",
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.beekeeper = {
    PARENT: "genericTank",
    LABEL: "Beekeeper",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.fieldGun = {
    PARENT: "genericTank",
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]),
                TYPE: "minimissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}

// Launcher upgrades
Class.skimmer = {
    PARENT: "genericTank",
    LABEL: "Skimmer",
    DANGER: 7,
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer]),
                TYPE: "missile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.twister = {
    PARENT: "genericTank",
    LABEL: "Twister",
    TOOLTIP: "Hold right click to reverse missile rotation.",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { reload: 4/3 }]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.swarmer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Swarmer",
    GUNS: [
        {
            POSITION: [15, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.hive]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
}
Class.rocketeer = {
    PARENT: "genericTank",
    LABEL: "Rocketeer",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.rocketeer]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: "sustained",
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
}

// Trapper upgrades
Class.builder = {
    PARENT: "genericTank",
    LABEL: "Builder",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}
Class.triTrapper = {
    PARENT: "genericTank",
    LABEL: "Tri-Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ], 3)
}
Class.trapGuard = makeGuard({
    PARENT: "genericTank",
    LABEL: "Trap",
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
})

// Builder upgrades
Class.construct = { // it's "construct" and not "constructor" because "constructor" breaks things
    PARENT: "genericTank",
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}
Class.engineer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
                STAT_CALCULATOR: "block"
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
}
Class.boomer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            POSITION: [5, 10, 1, 13, 0, 0, 0],
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
                TYPE: "boomerang",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}
Class.assembler = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: 'Assembler',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: 'assemblerTrap',
                MAX_CHILDREN: 8,
                STAT_CALCULATOR: "block",
            }
        }
    ],
    TURRETS: [
        {
            POSITION: [2.5, 14, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ]
}

// Tri-Trapper upgrades
Class.hexaTrapper = makeAuto({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ], 6, 0.5),
}, "Hexa-Trapper")
Class.septaTrapper = {
    PARENT: "genericTank",
    LABEL: "Septa-Trapper",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ], 7, 4/7),
}
Class.architect = makeRadialAuto("architectGun", {isTurret: true, danger: 7, size: 12, label: "Architect", body: {SPEED: 1.1 * base.SPEED}})

// Trap Guard upgrades
Class.bushwhacker = makeGuard("sniper", "Bushwhacker")
Class.gunnerTrapper = {
    PARENT: "genericTank",
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { speed: 1.2 }, { recoil: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}
Class.bomber = {
    PARENT: "genericTank",
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}
Class.conqueror = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    REVERSE_TARGET_WITH_TANK: true,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}
Class.bulwark = {
    PARENT: "genericTank",
    LABEL: "Bulwark",
    STAT_NAMES: statnames.mixed,
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [14, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}

// Desmos upgrades
Class.helix = {
    PARENT: "genericTank",
    LABEL: "Helix",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 6, -4/3, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {shudder: 0, spray: 0, size: 0.8}]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: false}]}]
            },
        },
        {
            POSITION: [20, 6, -4/3, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        },
    ],
}
Class.sidewinder = {
    PARENT: "genericTank",
    LABEL: "Sidewinder",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [10, 8.5, 1.4, 7, 0, 0, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sidewinder2]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            },
        },
        {
            POSITION: [4.25, 11, 2, 2.25, -4.25, 92.5, 0]
        },
        {
            POSITION: [4.25, 11, 2, 2.25, 4.25, -92.5, 0]
        }
    ]
}
Class.undertowEffect = {
            PARENT: 'genericTank',
            TYPE: 'undertowEffect',
            SIZE: 5,
            COLOR: 1,
            HITS_OWN_TYPE: "never",
            GIVE_KILL_MESSAGE: false,
            ACCEPTS_SCORE: false,
            DRAW_HEALTH: false,
            DIE_AT_RANGE: true,
            BODY: {
                HEALTH: 9e99,
                DAMAGE: 0,
                RANGE: 5,
                PUSHABILITY: 0,
            }
         };
        Class.undertowBullet = {
            PARENT: 'bullet',
            ON: [
            {
             event: "tick",
             handler: ({ body }) => {
               for (let instance of entities) {
                     let diffX = instance.x - body.x,
                         diffY = instance.y - body.y,
                         dist2 = diffX ** 2 + diffY ** 2;
                     if (dist2 <= ((body.size / 12)*250) ** 1.9) {
                     if ((instance.team != body.team || (instance.type == "undertowEffect" && instance.master.id == body.master.id)) && instance.type != "wall" && instance.isTurret != true) {
                     if (instance.type == "undertowEffect") {
                        forceMulti = 1
                     }
                     else if (instance.type == "food") {
                        forceMulti = (6 / instance.size)
                     }      
                     else {
                        forceMulti = (2 / instance.size)
                     }           
                        instance.velocity.x += util.clamp(body.x - instance.x, -90, 90) * instance.damp * forceMulti;//0.05
                        instance.velocity.y += util.clamp(body.y - instance.y, -90, 90) * instance.damp * forceMulti;//0.05
                        if (instance.type != "undertowEffect" && instance.type != "bullet" && instance.type != "swarm" && instance.type != "drone" && instance.type != "trap" && instance.type != "dominator") {
                                let o = new Entity({x: instance.x, y: instance.y})
                                o.define('undertowEffect')
                                o.team = body.team;
                                o.color = instance.color;
                                o.alpha = 0.3;
                                o.master = body.master;
                        }
                 }
             }
                  if (dist2 < body.size ** 3 + instance.size ** 3) {
                     if (instance.master.id == body.master.id) {
                         if (instance.type == "undertowEffect")
                         {
                            instance.kill();
                         }
                        }
                    }
                }
            }
        }
          ],
        }
         Class.undertow = {
            PARENT: "genericTank",
            LABEL: "Undertow",
            DANGER: 6,
            GUNS: [
                {
                    POSITION: [14, 12, 0.8, 0, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { size: 0.8, reload: 1.2 }]),
                        TYPE: 'undertowBullet'
                    }
                },
                {
                    POSITION: [11.25, 8, 0.15, 4.25, 4, 13.5, 0]
                },
                {
                    POSITION: [11.25, 8, 0.15, 4.25, -4, -13.5, 0]
                }
            ]
        }
Class.repeater = {
    PARENT: "genericTank",
    LABEL: "Repeater",
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.repeater]),
                TYPE: ["splitterBullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, -8, 91.5, 0]
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, 8, -91.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -50, 0]
        }
    ]
}

// Helix upgrades
Class.triplex = {
    PARENT: "genericTank",
    LABEL: "Triplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [18, 10, 0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 0.7, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [18, 10, 0.7, 0, 0, -45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            POSITION: [3.75, 10, 2.125, 1, -4.25, 10, 0],
        },
        {
            POSITION: [3.75, 10, 2.125, 1, 4.25, -10, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, 22.5, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, -22.5, 0],
        },
    ],
}
Class.quadruplex = {
    PARENT: "genericTank",
    LABEL: "Quadruplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {amplitude: 25}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -45, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {amplitude: 25, invert: true}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -135, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {period: 7, amplitude: 12.5}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, -135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, 45, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {period: 7, amplitude: 12.5, invert: true}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, -45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, 135, 0]
        },
    ],
}

// Sidewinder upgrades
Class.coil = {
    PARENT: "genericTank",
    LABEL: "Coil",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [20, 8, 0.75, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sidewinder2]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            },
        },
        {
            POSITION: [20, 8, 0.75, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sidewinder2]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true}]]}]
            },
        },
        {
            POSITION: [21, 4, 0.75, 0, -5, 0, 0]
        },
        {
            POSITION: [21, 4, 0.75, 0, 5, 0, 0]
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        }
    ]
}
Class.python = {
    PARENT: "sidewinderOld",
    LABEL: "Python",
}
Class.ranch = {
    PARENT: "genericTank",
    LABEL: "Ranch",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.sidewinder2]),
                TYPE: ["minion", {CONTROLLERS: ['snake']}],
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 7.5, 2.5, 1, -4.5, 95, 0],
        },
        {
            POSITION: [5, 7.5, 2.5, 1, 4.5, -95, 0],
        },
    ],
}
Class.oroboros = {
    PARENT: "genericTank",
    LABEL: "Oroboros",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank is a placeholder!",
    GUNS: [
        {
            POSITION: [10, 8.5, 1.4, 7, 0, 0, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sidewinder2, { speed: 3 }]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            },
        },
        {
            POSITION: [4.25, 11, 2, 2.25, -4.25, 92.5, 0]
        },
        {
            POSITION: [4.25, 11, 2, 2.25, 4.25, -92.5, 0]
        }
    ]
}
Class.cocciPart1 = {
    PARENT: "genericSmasher",
    LABEL: "",
    BODY: {
      REGEN: 999999,
      HEALTH: 99999,
      PENETRATION: 999
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/4, 0],
            TYPE: "smasher",
            VULNERABLE: true
        },
    ]
}
Class.cocciPart2 = {
    PARENT: "genericSmasher",
    LABEL: "",
    BODY: {
      REGEN: 999999,
      HEALTH: 99999,
      PENETRATION: 999
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/3, 0],
            TYPE: "cocciPart1",
            VULNERABLE: true
        },
    ]
}
Class.cocciPart3 = {
    PARENT: "genericSmasher",
    LABEL: "",
    BODY: {
      REGEN: 999999,
      HEALTH: 99999,
      PENETRATION: 999,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/2, 0],
            TYPE: "cocciPart2",
            VULNERABLE: true
        },
    ]
}
Class.cocci = {
    PARENT: "genericSmasher",
    LABEL: "Cocci",
    UPGRADE_TOOLTIP: "[DEV NOTE] this is a very early prototype and probably won't work so well lol",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90, 0],
            TYPE: "cocciPart3",
            VULNERABLE: true
        }
    ]
}

// Undertow upgrades
Class.riptide = {
    PARENT: "genericTank",
    LABEL: "Riptide",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [6.5, 23.5, 0.25, 3, 0, 180, 0],
        },
        {
            POSITION: [18, 16, 0.75, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { size: 0.9, reload: 1.2 }]),
                TYPE: "undertowBullet"
            }
        },
        {
            POSITION: [17, 16, 0.1, 0.25, 4, 13.5, 0]
        },
        {
            POSITION: [17, 16, 0.1, 0.25, -4, -13.5, 0]
        }
    ]
}

// Repeater upgrades
Class.iterator = {
    PARENT: "genericTank",
    LABEL: "Iterator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [22, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.repeater]),
                TYPE: ["superSplitterBullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, -7, 91.5, 0]
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, 7, -91.5, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, -5, 95, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, 5, -95, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, -5.25, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, 5.25, -50, 0]
        }
    ]
}
Class.duplicator = {
    PARENT: "genericTank",
    LABEL: "Duplicator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {MOTION_TYPE: ["desmos", {invert: false}]}]
            }
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            }
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, -8, 111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -30, 0]
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, 8, -111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 30, 0]
        },
        {
            POSITION: [17, 8, 0.65, 0, 0, 0, 0]
        },
        {
            POSITION: [18, 8, 0.25, 0, 0, 0, 0]
        },
    ]
}

// Smasher upgrades
Class.megaSmasher = {
    PARENT: "genericSmasher",
    LABEL: "Mega-Smasher",
    BODY: {
        SPEED: 1.5 * base.SPEED,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
        ACCELERATION: 1.5 * base.ACCEL,
    },
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
}
Class.spike = {
    PARENT: "genericSmasher",
    LABEL: "Spike",
    BODY: {
        DAMAGE: base.DAMAGE * 2,
    },
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
}
Class.landmine = {
    PARENT: "genericSmasher",
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    TOOLTIP: "Stay still to turn invisible.",
    BODY: {
        SPEED: 1.45 * base.SPEED
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody"
        }
    ]
}

// Healer upgrades
Class.medic = {
    PARENT: "genericTank",
    LABEL: "Medic",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.sniper]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.ambulance = {
    PARENT: "genericTank",
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }, g.healer]),
                TYPE: "healerBullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.surgeon = {
    PARENT: "genericTank",
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "surgeonPillbox",
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "block",
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.paramedic = {
    PARENT: "genericTank",
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}

// Bird tanks
Class.falcon = makeBird("assassin", "Falcon")
Class.vulture = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [22, 7, -1.5, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 7.5, -1.5, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/7.5}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, -1.5, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/8}]),
                TYPE: "bullet"
            }
        }
    ]
}, "Vulture")
Class.phoenix = makeBird("sprayer", "Phoenix")
Class.eagle = makeBird("pounder", "Eagle")

// Over tanks
Class.overgunner = makeOver({
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
})
Class.overtrapper = makeOver({
    PARENT: "genericTank",
    LABEL: "Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            }
        }
    ]
})

//delta upgrades
Class.minilaser = {
    PARENT: "genericTank",
    LABEL: "Plasma SMG",
    DANGER: 7,
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
            POSITION: [24, 1, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                COLOR: 'red',
                SHOOT_SETTINGS: combineStats([g.fake]),
                TYPE: "laser",
            },
        }
    ],
}
Class.cruiserdrive = {
    PARENT: "genericTank",
    LABEL: "Swarmdrive",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoturretswarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoturretswarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.shrapnelgun = {
    PARENT: "genericTank",
    LABEL: "Albuquerque",
    DANGER: 7,
    GUNS: [{
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.halfspeed]),
                TYPE: "grenade"
            }
        }
    ],
      TURRETS: [{
        POSITION: [8.2, 16.7, 0, 0, 0, 0],
        TYPE: ["grenadeDeco", { MIRROR_MASTER_ANGLE: true }],
    }
  ]
}
Class.firecracker = {
    PARENT: "genericTank",
    LABEL: "Firecracker",
    DANGER: 7,
    GUNS: [{
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.halfspeed, g.halfspeed, { damage: 0.85, reload: 2.2 }]),
                TYPE: "firecrackerbomb"
            }
        }
    ],
      TURRETS: [{
        POSITION: [8.2, 13, 0, 0, 0, 2],
        TYPE: ["firecrackerDeco", { MIRROR_MASTER_ANGLE: true }],
    }
  ]
}
Class.inception = {
    PARENT: "genericTank",
    LABEL: "Inception",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "autobullet",
            }
        }
    ],
      TURRETS: [{
        POSITION: [5.5, 18, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.inceptionist = {
    PARENT: "genericTank",
    LABEL: "Ceptionist",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "ceptionistbullet",
            }
        }
    ],
      TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.twinceptionist = {
    PARENT: "genericTank",
    LABEL: "Twinceptionist",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "ceptionistbullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "ceptionistbullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.machinception = {
    PARENT: "genericTank",
    LABEL: "Machceptioner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "autobullet"
            }
        }
    ],
    TURRETS: [{
        POSITION: [6.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.machceptionist = {
    PARENT: "genericTank",
    LABEL: "Machceptionist",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "ceptionistbullet"
            }
        }
    ],
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.flankinception = {
    PARENT: "genericTank",
    LABEL: "Flankceptioner",
    DANGER: 6,
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: weaponArray({
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "autobullet"
        }
    }, 3),
    TURRETS: weaponArray({
        POSITION: [5.5, 18, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }, 3)
}
Class.flankceptionist = {
    PARENT: "genericTank",
    LABEL: "Flankceptionist",
    DANGER: 7,
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: weaponArray({
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "ceptionistbullet"
            }
        }, 3),
    TURRETS: weaponArray({
        POSITION: [5.5, 18, 0, 0, 0, 0],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }, 3)
}
Class.flankdue = {
    PARENT: "genericTank",
    LABEL: "Flankduer",
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        SPEED: base.SPEED * 1.1,
    },
    GUNS: weaponArray([{
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.hunter]),
            TYPE: "bullet"
        }
    }], 3)
}
Class.tailgator = {
    PARENT: "genericTank",
    LABEL: "Tailgator",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "heavyautobullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [7.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.poundceptionist = {
    PARENT: "genericTank",
    LABEL: "PoundCeptionist",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "ceptionistbullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.interceptor = {
    PARENT: "genericTank",
    LABEL: "Interceptor",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "heavyautobullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [7.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.revolutionist = {
    PARENT: "genericTank",
    LABEL: "Revolutionist",
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBase",
    },
  ],
};
Class.proton = {
    PARENT: "genericTank",
    LABEL: "Proton",
    DANGER: 7,
    BODY: {
      SPEED: 4 * base.SPEED
    },
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "protonturretBase",
    },
  ],
};
Class.baseThrower = {
    PARENT: "genericTank",
    LABEL: "Kivaaritehdas",
    DANGER: 7,
    SYNC_TURRET_SKILLS: true,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 38, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang, g.kiva]),
            TYPE: ["baseBullet", { COLOR: "#FC8208", KEEP_OWN_COLOR: false }],
            ALT_FIRE: true,
            ALPHA: 0
        }
    }],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBaseKiva",
    }],
  ON: [{
        event: "altFire",
        handler: ({ body }) => {
            body.define(Class.baseThrowerFire, true)
        }
      }
    ]
};
Class.baseThrowerFire = {
    PARENT: "genericTank",
    LABEL: "Kivaaritehdas",
    DANGER: 7,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }]
};
Class.subverter = {
    PARENT: "genericTank",
    LABEL: "Subverter",
    DANGER: 7,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "subverterturretBase",
    },
  ],
};
Class.pion = {
    PARENT: "genericSmasher",
    LABEL: "Pion",
    DANGER: 7,
    BODY: {
        SPEED: 2.5 * base.SPEED
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }, {
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "pionturretBase",
    }]
}
Class.equilibrium = {
    PARENT: "genericTank",
    LABEL: "Equilibrium",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.twin]),
                TYPE: "bullet"
            }
        }
    ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBase",
    },
  ],
};
Class.hadron = {
    PARENT: "genericTank",
    LABEL: "Hadron",
    DANGER: 7,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "hadronturretBase",
    }
  ],
};
Class.hivemind = {
  PARENT: "genericTank",
  LABEL: "Hivemind",
  DANGER: 7,
  STAT_NAMES: statnames.mixed,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.cloner]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 90, 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, { reload: 5 }]),
        TYPE: "hiveprobe",
        MAX_CHILDREN: 1,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 270, 3.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, { reload: 10 }]),
        TYPE: "hiveprobe",
        MAX_CHILDREN: 1,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [27, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
};
Class.cloner = {
  PARENT: "genericTank",
  LABEL: "Cloner",
  STAT_NAMES: statnames.mixed,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.cloner]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 270, 3.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, { reload: 10 }]),
        TYPE: "clonerprobe",
        MAX_CHILDREN: 1,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
};
    Class.dictator = {
        PARENT: "genericTank",
        LABEL: "Dictator",  
        STAT_NAMES: statnames.drone,
        DANGER: 7,
        SHAPE: 8,
        BODY: {
            ACCELERATION: base.ACCEL * 0.75,
            FOV: base.FOV * 1.1,
        },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                    TYPE: "fastdrone",
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: "drone",
                }, },
        ],
    };
Class.littleHunter = {
    PARENT: "genericTank",
    LABEL: "Subduer",
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter]),
            TYPE: "bullet"
        }
    }]
};
Class.subway = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.05
    },
    GUNS: [{
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.triAngle, g.triAngleFront, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.triAngle, g.triAngleFront, g.hunter]),
            TYPE: "bullet"
        }
    }]
}, "Subway")
Class.cockatiel = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.05
    },
    GUNS: [{
        POSITION: [21, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.triAngle, g.triAngleFront, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    },         {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            }
        }]
}, "Cockatiel")
Class.binary = {
    PARENT: "genericTank",
    LABEL: "Binary",
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [20, 5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 8, 1, 0, 5.5, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 5, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 8, 1, 0, -5.5, 0, 0.7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter]),
            TYPE: "bullet"
        }
    }]
}
Class.twincontagion = {
    PARENT: "genericTank",
    LABEL: "Contagiwark",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, -5.5, -8, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.twin]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, -8, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, -5.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
        }
    }, {
        POSITION: [19, 5.5, 1, 0, 5.5, 8, 0.7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.twin]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 8, 1, 0, 5.5, 8, 0.5]
    }, {
        POSITION: [4, 8, 1.7, 13, 5.5, 8, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
        }
    }]
}
Class.trinary = {
    PARENT: "genericTank",
    LABEL: 'Trinary',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .7,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [22, 5, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, .7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 5, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 8, 1, 0, -2, -20, .7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [25, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }]
};
Class.bigSubduer = {
    PARENT: "genericTank",
    LABEL: 'Mitochondrion',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [26, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 5, 1, 0, 0, 0, .15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, .3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.predator]),
            TYPE: "bullet"
        }
    }]
}
Class.clubbin = {
    PARENT: "genericTank",
    LABEL: "Clubbin",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.1
    },
    GUNS: weaponArray([{
        POSITION: [26, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 5, 1, 0, 0, 0, .15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, .3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.hunter, g.predator]),
            TYPE: "bullet"
        }
    }], 3)
}
Class.biggerSubduer = {
    PARENT: "genericTank",
    LABEL: 'Cytochrome',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        SPEED: base.SPEED * 0.95,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [29, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator, g.lessrecoil]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [26, 4, 1, 0, 0, 0, 2/15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator, g.lessrecoil]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 6, 1, 0, 0, 0, 4/15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.predator]),
            TYPE: "bullet"
        }
    }]
}
Class.accelminigun = {
    PARENT: "genericTank",
    LABEL: "Rainmaker",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.4
    },
    GUNS: [
      {
        POSITION: [8, .1, -54, 21, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.fake, g.triplereload]),
            TYPE: "bullet",
            COLOR: 12
            }
        }, 
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.rainmaker, g.morerange, g.morerange]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.rainmaker, g.morerange, g.morerange]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.rainmaker, g.morerange, g.morerange]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            }
        }
    ]
}
Class.railgun = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Railgun",
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.25 * base.FOV
    },
    GUNS: [
          {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 6.5, 1, 25, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
      }
    }, {
      POSITION: [1, 6.5, 1, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
            }
        },    {
      POSITION: [1, 6.5, 1, 15, 0, 0, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
      }
      },
    {
      POSITION: [1, 6.5, 1, 20, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [22, 1.9, 1, 5, 4, 0, 0]
    },
    {
      POSITION: [22, 1.9, 1, 5, -4, 0, 0]
    }
    ]
}
Class.skater = {
    PARENT: "genericSmasher",
    LABEL: "Skater",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 2.3,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }, {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ["skaterDeco", { COLOR: "#49bdde" }]
        }
    ]
}
Class.revodirector = {
    PARENT: "genericTank",
    LABEL: "Solar System",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "revoorbitdrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 5
            }
        }
    ],
      TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBasenoguns",
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "overdriveDeco",
    },
  ],
}
Class.directdrive = {
    PARENT: "genericTank",
    LABEL: "Motor",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6
            }
        }
    ],
      TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ]
}
Class.contagion = {
    PARENT: "genericTank",
    LABEL: 'Contagion',
    DANGER: 6,
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
        }
    }]
};
Class.triContagion = {
    PARENT: "genericTank",
    LABEL: "Tri-Contagion",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    GUNS: weaponArray([{
        POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
        }
    }], 3)
}
Class.autoContagion = makeAuto("contagion");
Class.fort = {
    PARENT: "genericTank",
    LABEL: "Fort",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.15
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [22, 5.5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
            TYPE: "setTrap"
        }
    }]
};
Class.droneTrapper = {
    PARENT: "genericTank",
    LABEL: "Magician",
    DANGER: 7,
    BODY: {
        FOV: 1.1,
        ACCELERATION: base.ACCEL * .9
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.lesspower]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 6
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "drone",
        }
    }]
}
Class.trojan = {
    PARENT: "genericTank",
    LABEL: "Trojan",
    STAT_NAMES: statnames.mixed,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.675,
        SPEED: base.SPEED * 0.875,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.bitlessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 4
        }
    }, {
        POSITION: [19, 5.5, 1, 0, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.bitlessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 4
        }
    }]
}
Class.gundirector = {
    PARENT: "genericTank",
    LABEL: "Pathogen",
    STAT_NAMES: statnames.mixed,
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.95,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.bitlessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 6
        }
    }]
}
Class.gundirectorbig = {
    PARENT: "genericTank",
    LABEL: "X-Pathogen",
    STAT_NAMES: statnames.mixed,
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        FOV: 1.2,
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { speed: 1.25, reload: 0.95, maxSpeed: 1.15 } ]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [6, 16, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.bitlessreload, { speed: 1.1, maxSpeed: 1.1 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 6
        }
    }]
}
Class.wyrm = {
    PARENT: "genericTank",
    LABEL: "Wyrm",
    DANGER: 7,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.mixed,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
{
        POSITION: [18, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.protist = {
    PARENT: "genericTank",
    LABEL: "Protist",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .9,
        SPEED: base.SPEED * .8,
        FOV: 1.1
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [18, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [1, 12, 1.01, 15, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4
        }
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }]
};
Class.acid = {
    PARENT: "genericTank",
    LABEL: 'Acid',
    DANGER: 6,
    GLOW: {
        RADIUS: 2,
        COLOR: "green",
        ALPHA: 1,
        RECURSION: 4,
    },
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "poisonbullet",
        }
    }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "green"
        }
    }]
};
Class.disintegrator = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Disintegrator",
    GLOW: {
        RADIUS: 2,
        COLOR: "green",
        ALPHA: 1,
        RECURSION: 4,
    },
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: 0.7 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "poisonbullet"
            }
        }, {
        POSITION: [16, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "green"
            }
        }, {
        POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.formaldehyde = {
    PARENT: "genericTank",
    LABEL: "Formaldehyde",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GLOW: {
        RADIUS: 2,
        COLOR: "green",
        ALPHA: 1,
        RECURSION: 4,
    },
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "poisonbullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "poisonbullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "poisonbullet"
            }
        }, {
        POSITION: [16, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "green"
            }
        }
    ]
}
Class.icegun = {
    PARENT: "genericTank",
    LABEL: "Icegun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GLOW: {
        RADIUS: 2,
        COLOR: "#28B1DE",
        ALPHA: 1,
        RECURSION: 4,
    },
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "icebullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "icebullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "icebullet"
            }
        }, {
        POSITION: [16, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#28B1DE"
            }
        }
    ]
}
Class.frostbite = {
    PARENT: "genericTank",
    LABEL: 'Frostbite',
    DANGER: 7,
    GLOW: {
        RADIUS: 2,
        COLOR: "#28dead",
        ALPHA: 1,
        RECURSION: 4,
    },
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "poisonicebullet",
        }
    }, {
        POSITION: [19, 2.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#28B1DE"
        }
    }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "green"
        }
    }]
};
Class.chiller = {
    PARENT: "genericTank",
    LABEL: 'Chiller',
    DANGER: 6,
    GLOW: {
        RADIUS: 2,
        COLOR: "#28B1DE",
        ALPHA: 1,
        RECURSION: 4,
    },
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "icebullet"
        }
    }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }]
};
Class.freezer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Freezer",
    GLOW: {
        RADIUS: 2,
        COLOR: "#28B1DE",
        ALPHA: 1,
        RECURSION: 4,
    },
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: 0.7 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "icebullet"
            }
        }, {
        POSITION: [16, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#28B1DE"
            }
        }, {
        POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.helecopter = {
  PARENT: "genericTank",
  LABEL: "Attack Helicopter",
  BODY: {
    SPEED: 7,
    PUSHABILITY: 0,
    ACCELERATION: 0.8,
  },
  DANGER: 6,
  GUNS: [{
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true,
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true,
            }, 
    }, {
            POSITION: [2, 2, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.triAngle, g.thruster, g.thruster, g.fakewithrecoil]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
    }, {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [26.5, 8, 0.7, 0, 0, 180, 0],
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 180, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, -27.5, 0, 0, 360, 1],
      TYPE: "helecoptersblade",
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 1],
      TYPE: "helecopterblade",
    },
  ],
};
Class.twinsniper = {
    PARENT: "genericTank",
    LABEL: "Twiper",
    DANGER: 6,
    BODY: {
        FOV: 1.1 * base.FOV
    },
    GUNS: [
        {            
            POSITION: [24, 8.5, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [24, 8.5, 1, 0, -5.5, 0, .5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.backShield = {
    PARENT: "genericTank",
    LABEL: 'BackShield',
    BODY: {
        SPEED: 2 * base.SPEED
    },
    DANGER: 6,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet"
        }
    }],
    TURRETS: [{
        POSITION: [18, 18, 0, 180, 360, 1],
        TYPE: ["backshieldturret", { SHAPE: 12 }],
        VULNERABLE: true
    }]
};
Class.bigBackShield = {
    PARENT: "genericTank",
    LABEL: 'Mega BackShield',
    DANGER: 7,
    BODY: {
        SPEED: 2 * base.SPEED
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet"
        }
    }],
    TURRETS: [{
        POSITION: [32, 25, 0, 180, 360, 1],
        TYPE: ["backshieldturret", { SHAPE: 12 }],
        VULNERABLE: true
    }]
};
Class.mirrorBackShield = {
    PARENT: "genericTank",
    LABEL: 'BackMirror',
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet"
        }
    }],
    TURRETS: [{
        POSITION: [16.7, -18.5, 0, 0, 360, 1],
        TYPE: ["mirrorbackshieldturret", { SHAPE: 14 }],
        VULNERABLE: true
    }]
};
Class.attacker = {
  PARENT: "twin",
  LABEL: "Attacker",
  DANGER: 7,
  BODY: {
    SPEED: 2 * base.SPEED
  },
  TURRETS: [{
        POSITION: [18, 18, 0, 180, 360, 1],
        TYPE: ["backshieldturret", { SHAPE: 12 }],
        VULNERABLE: true
    }]
}
Class.wark = {
    PARENT: "genericTank",
    LABEL: "Wark",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: [{
        POSITION: [13, 8, 1, 0, -5.5, -8, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, -5.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
        }
    }, {
        POSITION: [13, 8, 1, 0, 5.5, 8, 0.5]
    }, {
        POSITION: [4, 8, 1.7, 13, 5.5, 8, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
        }
    }]
}
Class.waterfall = {  
    PARENT: "genericTank",
    LABEL: "Waterfall",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, -2.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 180, 0],
        },
    ],
}
Class.auto2 = {
    PARENT: "genericTank",
    LABEL: "Auto-2",
    DANGER: 5,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: "autoTankGun"
    }]
}
Class.swivel2 = {
    PARENT: "genericTank",
    LABEL: "Swivel-2",
    DANGER: 6,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [{
        POSITION: [9, 7, 0, 0, 360, 1],
        TYPE: "swivelAutoGun"
    }, {
        POSITION: [9, 7, 0, 180, 360, 1],
        TYPE: "swivelAutoGun"
    }]
}
Class.swivel3 = {
    PARENT: "genericTank",
    LABEL: "Swivel-3",
    DANGER: 7,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [{
        POSITION: [9, 7, 0, 0, 360, 1],
        TYPE: "swivelAutoGun"
    }, {
        POSITION: [9, 7, 0, 120, 360, 1],
        TYPE: "swivelAutoGun"
    }, {
        POSITION: [9, 7, 0, 240, 360, 1],
        TYPE: "swivelAutoGun"
    }]
}
Class.axis4 = {
    PARENT: "genericTank",
    LABEL: "Axis-4",
    DANGER: 7,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [{
        POSITION: [9, 7, 0, 0, 360, 1],
        TYPE: "swivelAutoGun"
    }, {
        POSITION: [9, 7, 0, 180, 360, 1],
        TYPE: "swivelAutoGun"
    }, {
        POSITION: [11, 8, 0, 90, 190, 0],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 270, 190, 0],
        TYPE: "autoTankGun"
    }]
}
const timer = (run, duration) => {
    let timer = setInterval(() => run(), 31.25);
    setTimeout(() => {
        clearInterval(timer);
    }, duration * 1000);
};
  const damageOnTick = (body, instance, multiplier, duration, stopAtSetHealth, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.damageOnTicking && !instance.godmode && !instance.invuln && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) {
        instance.damageOnTicking = true;
        setTimeout(() => {
            instance.damageOnTicking = false;
        }, 2 * duration * 1000);
        timer(() => {
            if (instance.damageOnTicking && instance.health.amount > stopAtSetHealth && instance.health.amount - (multiplier * 0.5) > stopAtSetHealth) {
                instance.health.amount -= multiplier * 0.5;
            } //else {if (instance.health.amount - (multiplier * 0.5) < stopAtSetHealth) {instance.health.amount === stopAtSetHealth}}
        }, 2 * duration);
    }
};
const iceOnTick = (body, instance, multiplier, duration, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.invuln && !instance.godmode && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) timer(() => {
        instance.velocity.x /= 1.05 * multiplier;
        instance.velocity.y /= 1.05 * multiplier;
    }, 1.5 * duration);
};
Class.acidsmasher = {
    PARENT: "genericSmasher",
    LABEL: "Injector",
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [21.8, 0, 0, 0, 360, 0],
            TYPE: "greenSmasherBody",
        }, {
            POSITION: [22.3, 0, 0, 0, 360, -1],
            TYPE: "smasherBody"
        }
    ],
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
             damageOnTick(body, damageTool[0], 1, 1, 1, true);
         }
    }]
}
Class.autoinceptionistbody = {
    PARENT: "genericTank",
    LABEL: "Auto-Inceptionist base",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "ceptionistbullet",
            }
        }
    ]
}
Class.surge = {
    PARENT: "genericTank",
    LABEL: 'Surge',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .6,
        SPEED: base.SPEED * .95,
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "bullet",
            IGNORES_CANSHOOT_CHECKS: true
        }
    }, {
        POSITION: [0, 0, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.lance]),
            TYPE: "bullet",
            ALT_FIRE: true
        }
    }],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["surgeDeco", { MIRROR_MASTER_ANGLE: true }],
        },
    ],
    VARIABLES: {
        surgeMax: 88,
        surgeTimer: 0,
        firingStage: 1
    },
    ON: [{
        event: "altFire",
        handler: ({ body, gun }) => {
            if (body.variables.firingStage === 1) body.variables.firingStage = 2
        }
    }, {
        event: "tick",
        handler: ({ body, gun }) => {
        //setTimeout(() => sockets.broadcast(body.guns[0].shootSettings.toString()), 500);
        switch(body.variables.firingStage) {
            case 2:
                body.guns[0].canShoot = false;
                body.guns[0].shootSettings = combineStats([g.lance, g.emplaser, { health: 0.1, recoil: 0 }]);
                body.guns[0].setBulletType('surgeempBullet');
                body.guns[0].fire();
                
                body.variables.surgeTimer++;
                if (body.variables.surgeTimer === body.variables.surgeMax) {
                    body.variables.firingStage++;
                }
            break;
            case 3:
                body.guns[0].recoilVelocity = 0;
                body.guns[0].shootSettings = combineStats([g.basic, { health: 2, pen: 2.5, speed: 3, maxSpeed: 3, size: 1.2, range: 0.5, recoil: 5, damage: 0.3 }, g.tonsmorerecoil, g.noSpread]);
                body.guns[0].setBulletType('lineEMP');
                body.guns[0].fire();
                body.variables.firingStage++;
            break;
            case 4:
                body.variables.surgeTimer--;
                if (body.variables.surgeTimer === 0) {
                    body.variables.firingStage = 1;
                    body.guns[0].shootSettings = combineStats([g.basic, g.sniper]);
                    body.guns[0].setBulletType('bullet');
                    body.guns[0].canShoot = true;
                }
            break;
            }        
        }
    }],
    GLOW: {
        RADIUS: 1.2,
        COLOR: "spaceGem",
        ALPHA: 1,
        RECURSION: 3,
    }
}
Class.flashfire = {
    PARENT: "genericTank",
    LABEL: 'Flashfire',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.95,
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "bullet",
            IGNORES_CANSHOOT_CHECKS: true
        }
    }, {
        POSITION: [0, 0, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.lance]),
            TYPE: "bullet",
            ALT_FIRE: true
        }
    }],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["surgeDeco", { COLOR: "#de2410", MIRROR_MASTER_ANGLE: true }],
        },
    ],
    VARIABLES: {
        surgeMax: 88,
        surgeTimer: 0,
        firingStage: 1
    },
    ON: [{
        event: "altFire",
        handler: ({ body, gun }) => {
            if (body.variables.firingStage === 1) body.variables.firingStage = 2
        }
    }, {
        event: "tick",
        handler: ({ body, gun }) => {
        //setTimeout(() => sockets.broadcast(body.guns[0].shootSettings.toString()), 500);
        switch(body.variables.firingStage) {
            case 2:
                body.guns[0].canShoot = false;
                body.guns[0].shootSettings = combineStats([g.lance, g.emplaser, { health: 0.1, recoil: 0 }]);
                body.guns[0].setBulletType('flashfireBullet');
                body.guns[0].fire();
                
                body.variables.surgeTimer++;
                if (body.variables.surgeTimer === body.variables.surgeMax) {
                    body.variables.firingStage++;
                }
            break;
            case 3:
                body.guns[0].shootSettings = combineStats([g.basic, g.pelleter, { speed: 6, maxSpeed: 6, damage: 1.2, size: 0.65, spray: 2.3, recoil: 1 }]);
                body.guns[0].setBulletType('bullet');
                body.guns[0].fire(),
                body.guns[0].recoilVelocity = 56;
                setTimeout(() => body.guns[0].fire(), 15);
                setTimeout(() => body.guns[0].fire(), 30);
                setTimeout(() => body.guns[0].fire(), 45);
                setTimeout(() => body.guns[0].fire(), 60);
                setTimeout(() => body.guns[0].fire(), 75);
                setTimeout(() => body.guns[0].fire(), 90);
                setTimeout(() => body.guns[0].fire(), 105);
                setTimeout(() => body.guns[0].fire(), 120);
                setTimeout(() => body.guns[0].fire(), 135);
                setTimeout(() => body.guns[0].fire(), 150);
                setTimeout(() => body.guns[0].fire(), 165);
                setTimeout(() => body.guns[0].fire(), 180);
                setTimeout(() => body.guns[0].fire(), 195);
                setTimeout(() => body.guns[0].fire(), 210);
                setTimeout(() => body.guns[0].fire(), 225);
                setTimeout(() => body.guns[0].fire(), 240);
                setTimeout(() => body.guns[0].fire(), 255);
                setTimeout(() => body.guns[0].fire(), 270);
                setTimeout(() => body.guns[0].fire(), 285);
                setTimeout(() => body.guns[0].fire(), 300);
                body.variables.firingStage++;
            break;
            case 4:
                body.variables.surgeTimer--;
                if (body.variables.surgeTimer === 0) {
                    body.variables.firingStage = 1;
                    body.guns[0].shootSettings = combineStats([g.basic, g.sniper]);
                    body.guns[0].setBulletType('bullet');
                    body.guns[0].recoilVelocity = 0;
                    body.guns[0].canShoot = true;
                }
            break;
            }        
        }
    }],
    GLOW: {
        RADIUS: 1.2,
        COLOR: "#de2410",
        ALPHA: 1,
        RECURSION: 3,
    }
}
Class.brella = {
    PARENT: "genericTank",
    LABEL: "Nero-Brella",
    DANGER: 7,
    SYNC_TURRET_SKILLS: true,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 10, 0, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.brella]),
            TYPE: "brellaShield",
            ALT_FIRE: true,
            MAX_CHILDREN: 1,
            //ALPHA: 1
        }
    }],
    TURRETS: [
        {
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: "brellaDeco",
        },
    ],
};
Class.lancer = {
  PARENT: "genericLancer",
  LABEL: "Lancer",
  //UPGRADE_TOOLTIP: "Daily Tank!",
	//UPGRADE_COLOR: "rainbow",
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 0.9
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 0 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }
  ]
}
Class.slasher = {
  PARENT: "lancer",
  LABEL: "Slasher",
  DANGER: 7,
  BODY: {
    SPEED: 2.3 * base.SPEED
  },
  TURRETS: [{
        POSITION: [18, 18, 0, 180, 360, 1],
        TYPE: ["backshieldturret", { SHAPE: 12 }],
        VULNERABLE: true
    }]
}
Class.lancebrid = makeOver('lancer', "Lancebrid", {count: 1, independent: true, cycle: false});
Class.autolancer = makeAuto('lancer', "Auto-Lancer");
Class.autolancebrid = makeAuto('lancebrid', "Auto-Lancebrid");
Class.chasseur = {
  PARENT: "genericLancer",
  LABEL: "Chasseur",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 1.1
  },
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.chasseur]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0]
    }
  ]
}
Class.trailblazer = {
  PARENT: "genericLancer",
  LABEL: "Trailblazer",
  DANGER: 7,
  BODY: {
    HEALTH: 0.8 * base.HEALTH,
    SHIELD: 0.8 * base.SHIELD,
    DENSITY: 0.6 * base.DENSITY,
    DAMAGE: 0.9 * base.DAMAGE
  },
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer",
        HAS_NO_RECOIL: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
        TYPE: "bullet",
        LABEL: "thruster",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
        TYPE: "bullet",
        LABEL: "thruster",
      },
    }
  ]
}
Class.katana = {
  PARENT: "genericLancer",
  LABEL: "Katana",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9
  },
  VARIABLES: {
    dashes: 3
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 0 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }, {
      POSITION: [1, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { size: 1.4, range: 0.09, speed: 0, maxSpeed: 0 }]),
        TYPE: "katanaparticle",
        ALT_FIRE: true,
        IDENTIFIER: "dash"
      }
    }
  ],
  TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "katanaDeco",
        },
    ],
  ON: [{
      event: "altFire",
      handler: ({ body, gun }) => {
          if (gun.identifier = "dash") {
          if (body.variables.dashes > 0) {
              body.variables.dashes -= 1;
              if (body.variables.dashes < 1) body.guns[2].canShoot = false;
              body.sendMessage(`Dashes: ${body.variables.dashes.toString()}`)
              body.x += 200 * Math.cos(body.facing);
              body.y += 200 * Math.sin(body.facing);
              setTimeout(() => {
                  if (body.guns[2] !== undefined) {
                  body.variables.dashes += 1; 
                  body.sendMessage(`Dashes: ${body.variables.dashes.toString()}`)
                  body.guns[2].canShoot = true;
                }
              }, 5000);
          }
          }
      }
  }]
}
Class.shadow = {
  PARENT: "propel",
  LABEL: "Shadow",
  DANGER: 7,
  VARIABLES: {
    dashes: 3
  },
    BODY: {
        HEALTH: 0.9 * base.HEALTH,
        SHIELD: 0.9 * base.SHIELD,
        DENSITY: 0.7 * base.DENSITY,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 180, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        }, {
      POSITION: [1, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { size: 1.4, range: 0.09, speed: 0, maxSpeed: 0 }]),
        TYPE: "shadowparticle",
        ALT_FIRE: true,
        IDENTIFIER: "dash"
      }
    }
  ],
  TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "katanaDeco",
        },
    ],
  ON: [{
      event: "altFire",
      handler: ({ body, gun }) => {
          if (gun.identifier = "dash") {
          if (body.variables.dashes > 0) {
              body.variables.dashes -= 1;
              if (body.variables.dashes < 1) body.guns[2].canShoot = false;
              body.sendMessage(`Dashes: ${body.variables.dashes.toString()}`)
              body.x += 200 * Math.cos(body.facing);
              body.y += 200 * Math.sin(body.facing);
              setTimeout(() => {
                  if (body.guns[2] !== undefined) {
                  body.variables.dashes += 1; 
                  body.sendMessage(`Dashes: ${body.variables.dashes.toString()}`)
                  body.guns[2].canShoot = true;
                }
              }, 5000);
          }
          }
      }
  }]
}
Class.dasher = {
  PARENT: "genericLancer",
  LABEL: "Dasher",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9
  },
  VARIABLES: {
    dashes: 3
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 0 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }, {
      POSITION: [0, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.fakewithrecoil, { recoil: 10 }]),
        TYPE: "katanaparticle",
        ALT_FIRE: true,
        IDENTIFIER: "dash"
      }
    }
  ],
  ON: [{
      event: "altFire",
      handler: ({ body, gun }) => {
          if (gun.identifier = "dash") {
          if (body.variables.dashes > 0) {
              body.variables.dashes -= 1;
              sockets.broadcast(body.variables.dashes.toString())
              setTimeout(() => {
                  if (body.guns[2] !== undefined) {
                  body.variables.dashes += 1; 
                  sockets.broadcast(body.variables.dashes.toString())
                  body.guns[2].canShoot = true;
                }
              }, 5000);
          } else {
              body.guns[2].canShoot = false;
          }
          }
      }
  }]
}
Class.bayonet = {
  PARENT: "genericLancer",
  LABEL: "Bayonet",
  DANGER: 6,
  STAT_NAMES: statnames.mixed,
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 0.9
  },
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, {recoil: 0}]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }, {
        POSITION: [13, 7, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { reload: 1.3, recoil: 0 }]),
            TYPE: "bullet"
      }
    }
  ]
}
Class.wakizashi = {
  PARENT: "genericLancer",
  LABEL: "Wakizashi",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 1.1
  },
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.chasseur]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0]
    }, {
        POSITION: [13, 7, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { reload: 1.3, recoil: 0}]),
            TYPE: "bullet"
      }
    }
  ]
}

Class.propel = {
    PARENT: "genericTank",
    LABEL: "Propeller",
    BODY: {
        HEALTH: 0.9 * base.HEALTH,
        SHIELD: 0.9 * base.SHIELD,
        DENSITY: 0.7 * base.DENSITY,
    },
    DANGER: 5,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 180, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.bateau = {
    PARENT: "genericTank",
    LABEL: "Bateau",
    BODY: {
        HEALTH: 0.9 * base.HEALTH,
        SHIELD: 0.9 * base.SHIELD,
        DENSITY: 0.7 * base.DENSITY,
        ACCELERATION: 2 * base.ACCEL,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1.3, 0, 0, 180, 2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { reload: 0.6, spray: 1.5, recoil: 2.3, damage: 0.7, range: 0.5 }]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.assblaster = {
    PARENT: "genericTank",
    LABEL: "Ass Blaster",
    BODY: {
        HEALTH: 0.9 * base.HEALTH,
        SHIELD: 0.9 * base.SHIELD,
        DENSITY: 0.7 * base.DENSITY,
        ACCELERATION: 2.2 * base.ACCEL,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [17, 12, 1.5, 0, 0, 180, 2.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { reload: 0.4, spray: 2, recoil: 2.8, damage: 0.6, range: 0.35, size: 1.5 }]),
                TYPE: ["bullet", { ALPHA: 0.5 }],
                LABEL: "thruster",
            },
        },
    ],
}
Class.rocker = {
    PARENT: "genericTank",
    LABEL: "Rocker",
    BODY: {
        HEALTH: 0.5 * base.HEALTH,
        SHIELD: 0.5 * base.SHIELD,
        DENSITY: 0.4 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1.3, 0, 0, 150, 2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { reload: 0.6, spray: 1.5, recoil: 2.3, damage: 0.7, range: 0.5 }]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1.3, 0, 0, 210, 2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { reload: 0.6, spray: 1.5, recoil: 2.3, damage: 0.7, range: 0.5 }]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.jouster = {
  PARENT: "genericLancer",
  LABEL: "Jouster",
  DANGER: 6,
  BODY: {
    HEALTH: 0.7 * base.HEALTH,
    SHIELD: 0.7 * base.SHIELD,
    DENSITY: 0.7 * base.DENSITY,
  },
  STAT_NAMES: statnames.mixed,
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 2 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { recoil: 0.6 }]),
        TYPE: "bullet",
        LABEL: "thruster",
      },
    },
  ]
}
Class.knight = {
  PARENT: "genericLancer",
  LABEL: "Knight",
  DANGER: 7,
  BODY: {
    HEALTH: 0.6 * base.HEALTH,
    SHIELD: 0.6 * base.SHIELD,
    DENSITY: 0.7 * base.DENSITY,
    ACCELERATION: 1.8 * base.ACCEL,
  },
  STAT_NAMES: statnames.mixed,
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 0 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    },
     {
        POSITION: [16, 8, 1.3, 0, 0, 180, 2],
        PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { reload: 0.6, spray: 1.5, recoil: 2, damage: 0.7, range: 0.5 }]),
             TYPE: "bullet",
             LABEL: "thruster",
       },
    },
  ]
}
Class.fencer = {
  PARENT: "genericLancer",
  LABEL: "Fencer",
  DANGER: 7,
  BODY: {
    HEALTH: 0.7 * base.HEALTH,
    SHIELD: 0.7 * base.SHIELD,
    DENSITY: 0.7 * base.DENSITY,
    DAMAGE: base.DAMAGE * 1.1
  },
  STAT_NAMES: statnames.mixed,
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.chasseur, { recoil: 2 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { recoil: 0.6 }]),
        TYPE: "bullet",
        LABEL: "thruster",
      },
    },
  ]
}
Class.arisaka = {
  PARENT: "genericLancer",
  LABEL: "Arisaka",
  DANGER: 7,
  BODY: {
    HEALTH: 0.7 * base.HEALTH,
    SHIELD: 0.7 * base.SHIELD,
    DENSITY: 0.7 * base.DENSITY,
    DAMAGE: base.DAMAGE * 1.1
  },
  STAT_NAMES: statnames.mixed,
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 2 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }, {
        POSITION: [13, 7, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { reload: 1.3, recoil: 0 }]),
            TYPE: "bullet"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, { recoil: 0.6 }]),
        TYPE: "bullet",
        LABEL: "thruster",
      },
    },
  ]
}
Class.saturn = {
    PARENT: "genericSmasher",
    LABEL: "Saturn",
    BODY: {
        DENSITY: 2 * base.DENSITY
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [3, 0, 0, 0, 360, 1],
            TYPE: "saturnDeco"
        },
        {
            POSITION: [34, 0, 0, 0, 360, 0],
            TYPE: "saturnturretBase"
        }
    ],
}
Class.choker = {
    PARENT: "genericTank",
    LABEL: "Choker",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
            GUNS: [
                {
                    POSITION: [14, 12, 0.8, 0, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { size: 0.8, reload: 1.2 }]),
                        TYPE: 'undertowBullet'
                    }
                },
                {
                    POSITION: [11.25, 8, 0.15, 4.25, 4, 13.5, 0]
                },
                {
                    POSITION: [11.25, 8, 0.15, 4.25, -4, -13.5, 0]
                },
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 0 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
        STAT_CALCULATOR: "lancer"
      }
    },
            ]
        }
Class.noble = {
    PARENT: "director",
    LABEL: "Noble",
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 2,
        SPEED: base.SPEED * 1.8
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 2],
        TYPE: ["turretBasenoguns", { COLOR: "#a2c4fc" }],
    }
  ],
}
Class.helium = {
    PARENT: "overseer",
    LABEL: "Helium",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 2,
        SPEED: base.SPEED * 1.8
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 2],
        TYPE: ["turretBasenoguns", { COLOR: "#a2c4fc" }],
    }
  ],
}
Class.neon = {
    PARENT: "cruiser",
    LABEL: "Neon",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 2,
        SPEED: base.SPEED * 1.8
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 2],
        TYPE: ["turretBasenoguns", { COLOR: "#a2c4fc" }],
    }
  ],
}
Class.argon = {
    PARENT: "underseer",
    LABEL: "Argon",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 2,
        SPEED: base.SPEED * 1.8
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 2],
        TYPE: ["turretBasenoguns", { COLOR: "#a2c4fc" }],
    }
  ],
}
Class.krypton = {
    PARENT: "gundirector",
    LABEL: "Krypton",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 2,
        SPEED: base.SPEED * 1.8
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 2],
        TYPE: ["turretBasenoguns", { COLOR: "#a2c4fc" }],
    }
  ],
}
Class.xenon = {
    PARENT: "spawner",
    LABEL: "Xenon",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 2,
        SPEED: base.SPEED * 1.8
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 2],
        TYPE: ["turretBasenoguns", { COLOR: "#a2c4fc" }],
    }
  ],
}
Class.radon = {
    PARENT: "directdrive",
    LABEL: "Radon",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 2,
        SPEED: base.SPEED * 1.8
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 2],
        TYPE: ["turretBasenoguns", { COLOR: "#a2c4fc" }],
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "overdriveDeco",
    },
  ],
}
Class.accelmachinegun = {
		PARENT: "genericTank",
    LABEL: "Machine Gun",
    GUNS: [
      	{
          	POSITION: [8, .1, -54, 19, 0, 0, 0],
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.fake]),
              	TYPE: "bullet",
              	COLOR: 12
            }
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.rainmaker]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            }
        }
    ]
}
Class.gatlinggun = {
    PARENT: "genericTank",
    LABEL: "Gatling Gun",
    DANGER: 6,
    GUNS: [{
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.accelgatlinggun = {
    PARENT: "genericTank",
    LABEL: "Charger",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
      {
        POSITION: [8, .1, -54, 21, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal, g.fake]),
            TYPE: "bullet",
            COLOR: 12
            }
        }, 
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal, g.rainmaker]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            },
        },
    ]
}
Class.Gatlinception = {
    PARENT: "genericTank",
    LABEL: "Gatceptioner",
    DANGER: 7,
    GUNS: [
{
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal]),
                TYPE: "autobullet",
            },
        },
    ],
    TURRETS: [{
        POSITION: [6.5, 22, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.Sprayinception = {
    PARENT: "genericTank",
    LABEL: "Sprayceptioner",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "autobullet"
            }
        },
    ],
    TURRETS: [{
        POSITION: [6.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.polygun = {
    PARENT: "genericTank",
    LABEL: 'Software',
    SHAPE: 8,
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [5, 16.5, 1, 10.5, 0, 180, 0]
    }, {
        POSITION: [2, 19.5, 1.01, 15.5, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, { health: 0.9 }]),
            TYPE: "polygunMinion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [12, 19.5, 1, 0, 0, 180, 0]
    }]
};
Class.ak47 = {
    PARENT: "genericTank",
    LABEL: "AK-47",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [22, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.power, { reload: 1.25, speed: 1.1, maxSpeed: 1.1, damage: 0.5, health: 1.3, pen: 1.4 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}
Class.icetrapper = {
    PARENT: "genericTank",
    LABEL: "Ice Trapper",
    STAT_NAMES: statnames.trap,
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "icetrap",
                STAT_CALCULATOR: "trap"
            }
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }
    ]
}
Class.icebuilder = {
    PARENT: "genericTank",
    LABEL: "Igloo",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setIceTrap",
                STAT_CALCULATOR: "block"
            }
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }
    ]
}
Class.icetriTrapper = {
    PARENT: "genericTank",
    LABEL: "Winter",
    DANGER: 7,
    STAT_NAMES: statnames.trap,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard]),
                TYPE: "icetrap",
                STAT_CALCULATOR: "trap"
            }
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }
    ], 3)
}
Class.icetrapGuard = makeGuard({
    PARENT: "genericTank",
    LABEL: "Trap",
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet"
            }
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }
    ]
}, "Ice Guard", "icetrap")

Class.icewark = {
    PARENT: "genericTank",
    LABEL: "Ice Wark",
    DANGER: 7,
    STAT_NAMES: statnames.trap,
    GUNS: [{
        POSITION: [13, 8, 1, 0, -5.5, -8, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, -5.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange]),
            TYPE: "icetrap",
            STAT_CALCULATOR: "trap",
        }
    }, {
        POSITION: [13, 8, 1, 0, 5.5, 8, 0.5]
    }, {
        POSITION: [4, 8, 1.7, 13, 5.5, 8, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.halfrange]),
            TYPE: "icetrap",
            STAT_CALCULATOR: "trap",
        }
    }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }]
}

Class.icecontagion = {
    PARENT: "genericTank",
    LABEL: 'Hypothermia',
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "icetrap",
            STAT_CALCULATOR: "trap",
        }
    }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }]
};
Class.miniVulc = {
    PARENT: "genericTank",
    LABEL: 'Submachine',
    DANGER: 6,
    GUNS: [{
        POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, g.doublereload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 10, 1, 0, 0, 0, 0]
    }, {
        POSITION: [5, 10, 1, 20, 0, 0, 0]
    }]
};
Class.miniVulcTrap = makeGuard("miniVulc", "Holster")
Class.vulcan = {
    PARENT: "genericTank",
    LABEL: 'Vulcan',
    DANGER: 7,
    GUNS: [{
        POSITION: [30, 1.5, 1, 0, -4.5, 0, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.9],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [30, 1.5, 1, 0, 0, 0, 0.7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc, { reload: 1.25, damage: 0.76 }]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 16, 1, 0, 0, 0, 0]
    }, {
        POSITION: [5, 16, 1, 20, 0, 0, 0]
    }]
};

Class.littleArtillery = {
    PARENT: "genericTank",
    LABEL: "Minishot",
    DANGER: 5,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
        }
    }]
};
// minishot upgrades
Class.littleMortar = {
    PARENT: "genericTank",
    LABEL: "Biggie-Shot",
    DANGER: 6,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
        }
    }]
};
Class.littleTwinArtillery = {
    PARENT: "genericTank",
    LABEL: "Hewn/2",
    DANGER: 6,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -8, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 8, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1.05, 0, 5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [20, 8, 1.05, 0, -5, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: "bullet",
        }
    }]
};
Class.littleSnipeArtillery = {
    PARENT: "genericTank",
    LABEL: "Shredder",
    DANGER: 6,
    GUNS: [{
        POSITION: [19, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper/*, {damage: 0.75, pen: 0.7, health: 0.9, speed: 0.85, maxSpeed: 0.9}*/]),
            TYPE: "bullet",
        }
    }]
};
Class.littleMachArtillery = {
    PARENT: "genericTank",
    LABEL: "Machshot",
    DANGER: 6,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.35, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
            TYPE: "bullet",
        }
    }]
};
Class.littleFlankArtillery = {
    PARENT: "genericTank",
    LABEL: "Trishot",
    DANGER: 6,
    GUNS: weaponArray([{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
        }
    }], 3)
};
Class.littleDirectArtillery = {
    PARENT: "genericTank",
    LABEL: "CEO",
    DANGER: 6,
  	STAT_NAMES: statnames.drone,
    GUNS: [{
        POSITION: [12, 3, 1, 0, -5, -8, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 3, 1, 0, 5, 8, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: {
          	LENGTH: 6,
            WIDTH: 11,
            ASPECT: 1.3,
            X: 7
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 4,
            WAIT_TO_CYCLE: true
        }
    }]
};
Class.littleTrapArtillery = {
    PARENT: "genericTank",
    LABEL: "Executionist",
    DANGER: 6,
  	STAT_NAMES: statnames.trap,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: {
            LENGTH: 15,
            WIDTH: 7
        }
    }, {
        POSITION: {
            LENGTH: 3,
            WIDTH: 7,
            ASPECT: 1.7,
            X: 15
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap"
        }
    }]
};
Class.littleSineArtillery = {
    PARENT: "genericTank",
    LABEL: "CosLock",
    DANGER: 6,
  	STAT_NAMES: statnames.desmos,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
	       POSITION: [20, 8, -4/3, 0, 0, 0, 0],
         PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
             TYPE: ["bullet", {CONTROLLERS: ['snake']}]
        }
    }, {
        POSITION: [3.75, 10, 2.125, 1.5, -6.25, 90, 0]
    }, {
        POSITION: [3.75, 10, 2.125, 1.5, 6.25, -90, 0]
    }]
};
Class.littleSubArtillery = {
    PARENT: "genericTank",
    LABEL: "Sub-Shot",
    DANGER: 6,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter]),
            TYPE: "bullet"
        }
    }]
};
Class.littleIncepArtillery = {
    PARENT: "genericTank",
    LABEL: "Catalyst",
    DANGER: 6,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "autobullet",
            }
        }
    ],
    TURRETS: [{
        POSITION: [5.5, 18, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }]
};
Class.littlePropArtillery = {
    PARENT: "genericTank",
    LABEL: "Speedrun",
    DANGER: 6,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 180, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
            LABEL: "thruster",
        },
		}]
};
Class.littleLanceArtillery = {
    PARENT: "genericTank",
    LABEL: "Knife",
  	STAT_NAMES: statnames.lancer,
    DANGER: 6,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
      	POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      	PROPERTIES: {
     		   	SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 0 }]),
       		 	TYPE: ["bullet", { ALPHA: 0 }],
      			AUTOFIRE: true,
   		  		STAT_CALCULATOR: "lancer"
      	}
    }, {
      	POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }]
};
// biggie shot upgrades
Class.littleSheller = {
  	PARENT: "genericTank",
  	LABEL: "Biggier-Shot",
  	DANGER: 7,
  	GUNS: [{
        POSITION: [13, 2, 1, 0, -8, -9, 5/6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 2, 1, 0, 8, 9, 4/6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 3/6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, 2/6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 1/6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
        }
    }]
}
Class.littleTwinMortar = {
    PARENT: "genericTank",
    LABEL: "Skewn/2",
    DANGER: 7,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -8.5, -11, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 8.5, 11, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -8, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 8, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1.05, 0, 5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [20, 8, 1.05, 0, -5, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: "bullet",
        }
    }]
};
Class.littleSnipeMortar = {
    PARENT: "genericTank",
    LABEL: "Chainsaw",
    DANGER: 7,
    GUNS: [{
        POSITION: [17, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper/*, {damage: 0.75, pen: 0.7, health: 0.9, speed: 0.85, maxSpeed: 0.9}*/]),
            TYPE: "bullet",
        }
    }]
};
Class.littleMachMortar = {
    PARENT: "genericTank",
    LABEL: "Machtillery",
    DANGER: 7,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
      	POSITION: [17, 3, 1, 0, -5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.35, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, {shudder: 1.3, spray: 0.95}]),
            TYPE: "bullet",
        }
    }]
};
Class.littleFlankMortar = {
    PARENT: "genericTank",
    LABEL: "Tri-Tillery",
    DANGER: 7,
    GUNS: weaponArray([{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        }
    }], 3)
};
Class.littleDirectMortar = {
    PARENT: "genericTank",
    LABEL: "MoneyBags",
    DANGER: 7,
  	STAT_NAMES: statnames.drone,
    GUNS: [{
        POSITION: [10.5, 2.5, 1, 0, -6.5, -9, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [10.5, 2.5, 1, 0, 6.5, 9, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 3, 1, 0, -5, -8, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 3, 1, 0, 5, 8, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: {
          	LENGTH: 6,
            WIDTH: 11,
            ASPECT: 1.3,
            X: 7
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 4,
            WAIT_TO_CYCLE: true
        }
    }]
};
Class.littleTrapMortar = {
    PARENT: "genericTank",
    LABEL: "Vile",
    DANGER: 7,
  	STAT_NAMES: statnames.trap,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: {
            LENGTH: 15,
            WIDTH: 7
        }
    }, {
        POSITION: {
            LENGTH: 3,
            WIDTH: 7,
            ASPECT: 1.7,
            X: 15
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap"
        }
    }]
};
Class.littleDesmosMortar = {
    PARENT: "genericTank",
    LABEL: "SineLock",
    DANGER: 7,
  	STAT_NAMES: statnames.desmos,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
	       POSITION: [20, 8, -4/3, 0, 0, 0, 0],
         PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
             TYPE: ["bullet", {CONTROLLERS: ['snake']}]
        }
    }, {
        POSITION: [3.75, 10, 2.125, 1.5, -6.25, 90, 0]
    }, {
        POSITION: [3.75, 10, 2.125, 1.5, 6.25, -90, 0]
    }]
};
Class.littleSubMortar = {
    PARENT: "genericTank",
    LABEL: "Mega Sub-Shot",
    DANGER: 7,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter]),
            TYPE: "bullet"
        }
    }]
};
Class.littleIncepMortar = {
    PARENT: "genericTank",
    LABEL: "Mechanism",
    DANGER: 7,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "autobullet",
        }
    }]
};
Class.littlePropMortar = {
    PARENT: "genericTank",
    LABEL: "Nascar",
    DANGER: 7,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 9, 1.05, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 180, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
            LABEL: "thruster",
        },
		}]
};
Class.littleLanceMortar = {
    PARENT: "genericTank",
    LABEL: "Exacto",
    DANGER: 7,
  	STAT_NAMES: statnames.lancer,
    GUNS: [{
        POSITION: [15, 2.5, 1, 0, -6.5, -8, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 2.5, 1, 0, 6.5, 8, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, -4.5, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 4.5, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
      	POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      	PROPERTIES: {
     		   	SHOOT_SETTINGS: combineStats([g.basic, g.lance, { recoil: 0 }]),
       		 	TYPE: ["bullet", { ALPHA: 0 }],
      			AUTOFIRE: true,
   		  		STAT_CALCULATOR: "lancer"
      	}
    }, {
      	POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }]
};
// hewn/2 upgrades
/*Class.littleTwinArtillery = {
    PARENT: "genericTank",
    LABEL: "Hewn/2",
    DANGER: 6,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -8, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 3, 1, 0, 8, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
            TYPE: "bullet"
        }
    }, {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: -2,
                ANGLE: -17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: 2,
                ANGLE: 17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
      ]
};*/
// Auto tanks
Class.autoBasic = makeAuto("basic", "Auto-Basic");
Class.autoTwin = makeAuto("twin", "Auto-Twin");
Class.autoMach = makeAuto("machineGun", "Auto-Machine");
Class.autoSniper = makeAuto("sniper", "Auto-Sniper");
Class.autoFlank = makeAuto("flankGuard", "Auto-Flank");
Class.autoDirector = makeAuto("director", "Chairman");
Class.autoPound = makeAuto("pounder", "Scratcher");
Class.autoTrap = makeAuto("trapper", "Auto-Trapper");
Class.autoDesmos = makeAuto("desmos", "Charter");
Class.autolittleHunter = makeAuto("littleHunter", "Duelist")
Class.autoinception = makeAuto("inception", "Deployer");
Class.autoauto2 = makeAuto("auto2", "Auto²-2");
Class.autoPropel = makeAuto("propel", "Grazer");
Class.autolittleArtillery = makeAuto("littleArtillery", "Quesadilla" /* delta wanted this name lmaoo */)
Class.autoCloner = makeAuto({
  PARENT: "genericTank",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.cloner]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 180, 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow]),
        TYPE: "autoclonerprobe",
        MAX_CHILDREN: 1,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
}, "Auto-Cloner");
Class.autoDouble = makeAuto("doubleTwin", "Mechanism")
Class.autoAssassin = makeAuto("assassin")
Class.autoGunner = makeAuto("gunner")
Class.autoTriAngle = makeAuto("triAngle")
Class.autoOverseer = makeAuto("overseer")
Class.autoRevolutionist = makeAuto("revolutionist", "Audioboard");
Class.autoCruiser = makeAuto("cruiser")
Class.autoSpawner = makeAuto("spawner")
Class.autoBuilder = makeAuto("builder")
Class.autoBinary = makeAuto("binary", "Computist")
Class.autoinceptionist = makeAuto("autoinceptionistbody", "Poster", {type: 'ceptionistturret'});
Class.autoGundirector = makeAuto("gundirector", "Virus")
Class.oganesson = makeAuto("noble", "Oganesson")
Class.autoBigSubduer = makeAuto("bigSubduer", "Membrane")
Class.autoFlankdue = makeAuto("flankdue", "Flank-Duelist")
Class.autoBateau = makeAuto("bateau", "Riverboat")
Class.autoTripleShot = makeAuto("tripleShot", "Oppressor");
Class.autoHunter = makeAuto("hunter", "Twogate");
Class.autoRifle = makeAuto("rifle", "Sidepoint");
Class.autoTwinsniper = makeAuto("twinsniper", "Watchlist");
Class.autoAcid = makeAuto("acid", "Cyanide");
Class.autoChill = makeAuto("chiller", "Coldpoint");
Class.autoMini = makeAuto("minigun", "Streamer");
Class.autoSprayer = makeAuto("sprayer", "Splasher");
Class.autoHexaTank = makeAuto("hexaTank", "Moat");
Class.autoAuto3 = makeAuto("auto3", "Auto²-3");
Class.autoUnderseer = makeAuto("underseer", "Plauge");
Class.autoDestroy = makeAuto("destroyer", "Executer");
Class.autoArtillery = makeAuto("artillery", "Bombarder");
Class.autoLaunch = makeAuto("launcher", "Harbinger");
Class.autoTrapGuard = makeAuto("trapGuard", "Ducker");
Class.autoSidewinder = makeAuto("sidewinder", "Auto-Sidewinder");
Class.autoHelix = makeAuto("helix", "DNA");
Class.autoUndertow = makeAuto("undertow", "Current");
Class.autoRepeater = makeAuto("repeater", "Patterner");
Class.automachinception = makeAuto("machinception", "Mechanist");
Class.autotailgator = makeAuto("tailgator", "Tailplayer");
Class.autoflankinception = makeAuto("flankinception", "Flank-Deployer");
Class.autoBackShield = makeAuto("backShield", "Coverer");
Class.autoSwivel2 = makeAuto("swivel2", "Scowerer");
Class.autoJouster = makeAuto("jouster", "Horse");
Class.autochasseur = makeAuto('chasseur', "Auto-Chasseur");
Class.autobayonet = makeAuto('bayonet', "Auto-Bayonet");
Class.autoGatlinggun = makeAuto("gatlinggun", "A-Gatling Gun");
Class.autowark = makeAuto("wark", "WaWark");
Class.autoIcetrapper = makeAuto("icetrapper", "Auto Ice Trapper");
Class.autolittleMortar = makeAuto("littleMortar");
Class.autolittleTwinArtillery = makeAuto("littleTwinArtillery");
Class.autolittleSnipeArtillery = makeAuto("littleSnipeArtillery");
Class.autolittleMachArtillery = makeAuto("littleMachArtillery");
Class.autolittleFlankArtillery = makeAuto("littleFlankArtillery");
Class.autolittleDirectArtillery = makeAuto("littleDirectArtillery");
Class.autolittleTrapArtillery = makeAuto("littleTrapArtillery");
Class.autolittleSineArtillery = makeAuto("littleSineArtillery");
Class.autolittleSubArtillery = makeAuto("littleSubArtillery");
Class.autolittleIncepArtillery = makeAuto("littleIncepArtillery");
Class.autolittlePropArtillery = makeAuto("littlePropArtillery");
Class.autolittleLanceArtillery = makeAuto("littleLanceArtillery");
Class.autominiVulc = makeAuto("miniVulc", "M-61");
Class.autoSmasher = makeAuto({
    PARENT: "genericSmasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ],
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl]
}, "Auto-Smasher", {type: "autoSmasherTurret", size: 11})

//Autodrive Stuff
Class.autoMotor = makeAuto("directdrive", "Auto-Motor", { type: "autoTankGunDrive" });

//Hybrid Tanks
Class.bascrid = makeOver('basic', "Basebrid", {count: 1, independent: true, cycle: false})
Class.twinbrid = makeOver('twin', "Twin-Hybrid", {count: 1, independent: true, cycle: false})
Class.machbrid = makeOver('machineGun', "Machine-Hybrid", {count: 1, independent: true, cycle: false})
Class.snipebrid = makeOver('sniper', "Snipebrid", {count: 1, independent: true, cycle: false})
Class.flankbrid = makeOver('flankGuard', "Flankbrid", {count: 1, independent: true, cycle: false})
Class.poundbrid = makeOver('pounder', "Poundbrid", {count: 1, independent: true, cycle: false})
Class.trapbrid = makeOver('trapper', "Trapbrid", {count: 1, independent: true, cycle: false})
Class.desmosbrid = makeOver('desmos', "Desmosbrid", {count: 1, independent: true, cycle: false})
Class.littleHunterbrid = makeOver('littleHunter', "Subbrid", {count: 1, independent: true, cycle: false})
Class.inceptionbrid = makeOver('inception', "Inceptionbrid", {count: 1, independent: true, cycle: false})
Class.auto2brid = makeOver('auto2', "Auto-2brid", {count: 1, independent: true, cycle: false})
Class.propelbrid = makeOver('propel', "Racer", {count: 1, independent: true, cycle: false})
Class.doubletwinbrid = makeOver('doubleTwin', "Double Twinbrid", {count: 1, independent: true, cycle: false})
Class.hexatankbrid = makeOver('hexaTank', "Hexatankbrid", {count: 1, independent: true, cycle: false})
Class.auto3brid = makeOver('auto3', "Auto-3brid", {count: 1, independent: true, cycle: false})
Class.binarybrid = makeOver('binary', "ZerOne", {count: 1, independent: true, cycle: false})
Class.flankduebrid = makeOver('flankdue', "Partier", {count: 1, independent: true, cycle: false, maxDrones: 1})
Class.bigsubduerbrid = makeOver('bigSubduer', "Enzyme", {count: 1, independent: true, cycle: false})
Class.clonebrid = makeOver({  
  PARENT: "genericTank",
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.cloner]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 180, 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow]),
        TYPE: "hybridclonerprobe",
        MAX_CHILDREN: 1,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
}, "Cloner-Hybrid", {count: 1, independent: true, cycle: false})
Class.bentHybrid = makeOver('tripleShot', "Bent Hybrid", {count: 1, independent: true, cycle: false})
Class.revobrid = makeOver('revolutionist', "Revobrid", {count: 1, independent: true, cycle: false});
Class.contagionbrid = makeOver('contagion', "Contagibrid", {count: 1, independent: true, cycle: false})
Class.poacher = makeOver('hunter', "Poacher", {count: 1, independent: true, cycle: false})
Class.armsman = makeOver('rifle', "Armsman", {count: 1, independent: true, cycle: false})
Class.cropDuster = makeOver('minigun', "Crop Duster", {count: 1, independent: true, cycle: false})
Class.hybrid = makeOver('destroyer', "Hybrid", {count: 1, independent: true, cycle: false})
Class.assbrid = makeOver('assassin', "Sharpshooter", {count: 1, independent: true, cycle: false})
Class.twipebrid = makeOver('twinsniper', "Twiperbrid", {count: 1, independent: true, cycle: false})
Class.acidbrid = makeOver('acid', "Acidibrid", {count: 1, independent: true, cycle: false})
Class.chillbrid = makeOver('chiller', "Chillbrid", {count: 1, independent: true, cycle: false})
Class.artilbrid = makeOver('artillery', "Artillerbrid", {count: 1, independent: true, cycle: false})
Class.spraybrid = makeOver('sprayer', "Hoser", {count: 1, independent: true, cycle: false})
Class.trapguardbrid = makeOver('trapGuard', "TG-Hybrid", {count: 1, independent: true, cycle: false})
Class.builderbrid = makeOver('builder', "Builderbrid", {count: 1, independent: true, cycle: false})
Class.launchbrid = makeOver('launcher', "Launcherbrid", {count: 1, independent: true, cycle: false})
Class.tritrapperbrid = makeOver('triTrapper', "T3T-Hybrid", {count: 1, independent: true, cycle: false})
Class.trianglebrid = makeOver('triAngle', "Trianglebrid", {count: 1, independent: true, cycle: false})
Class.helixbrid = makeOver('helix', "Gyre", {count: 1, independent: true, cycle: false})
Class.sidewinderbrid = makeOver('sidewinder', "Sidewinderbrid", {count: 1, independent: true, cycle: false})
Class.undertowbrid = makeOver('undertow', "Pullist", {count: 1, independent: true, cycle: false})
Class.repeaterbrid = makeOver('repeater', "Comparator", {count: 1, independent: true, cycle: false})
Class.inceptionistbrid = makeOver('inceptionist', "Inceptionistbrid", {count: 1, independent: true, cycle: false})
Class.machinceptionbrid = makeOver('machinception', "MachinceptibriDd", {count: 1, independent: true, cycle: false})
Class.tailgatorbrid = makeOver('tailgator', "Tailgatorbrid", {count: 1, independent: true, cycle: false})
Class.flankinceptionbrid = makeOver('flankinception', "Flankinceptibrid", {count: 1, independent: true, cycle: false})
Class.bateaubrid = makeOver('bateau', "Kayak", {count: 1, independent: true, cycle: false})
Class.swivel2brid = makeOver('swivel2', "Swivel2brid", {count: 1, independent: true, cycle: false})
Class.jousterbrid = makeOver('jouster', "Jousterbrid", {count: 1, independent: true, cycle: false})
Class.bayonetbrid = makeOver('bayonet', "Bayonet-Hybrid", {count: 1, independent: true, cycle: false});
Class.chasseubrid = makeOver('chasseur', "Chasseubrid", {count: 1, independent: true, cycle: false});
Class.backshieldbrid = makeOver('backShield', "Fireblanket", {count: 1, independent: true, cycle: false})
Class.gatlinggunbrid = makeOver('gatlinggun', "H-Gatling Gun", {count: 1, independent: true, cycle: false})
Class.warkbrid = makeOver('wark', "Waarrk", {count: 1, independent: true, cycle: false})
Class.icetrapbrid = makeOver('icetrapper', "Ice Trapper Brid", {count: 1, independent: true, cycle: false})
Class.littleArtillerybrid = makeOver('littleArtillery', "Minishotbrid", {count: 1, independent: true, cycle: false})
Class.littleMortarbrid = makeOver('littleMortar', "Biggieshotbrid", {count: 1, independent: true, cycle: false})
Class.littleTwinArtillerybrid = makeOver('littleTwinArtillery', "Hewn/2brid", {count: 1, independent: true, cycle: false})
Class.littleSnipeArtillerybrid = makeOver('littleSnipeArtillery', "Shredderbrid", {count: 1, independent: true, cycle: false})
Class.littleMachArtillerybrid = makeOver('littleMachArtillery', "Machshotbrid", {count: 1, independent: true, cycle: false})
Class.littleFlankArtillerybrid = makeOver('littleFlankArtillery', "Trishotbrid", {count: 1, independent: true, cycle: false})
Class.littleTrapArtillerybrid = makeOver('littleTrapArtillery', "Executionistbrid", {count: 1, independent: true, cycle: false})
Class.littleSineArtillerybrid = makeOver('littleSineArtillery', "Coslockbrid", {count: 1, independent: true, cycle: false})
Class.littleSubArtillerybrid = makeOver('littleSubArtillery', "Sub-shotbrid", {count: 1, independent: true, cycle: false})
Class.littleIncepArtillerybrid = makeOver('littleIncepArtillery', "Catalystbrid", {count: 1, independent: true, cycle: false})
Class.littlePropArtillerybrid = makeOver('littlePropArtillery', "Speedrunbrid", {count: 1, independent: true, cycle: false})
Class.littleLanceArtillerybrid = makeOver('littleLanceArtillery', "Knifebrid", {count: 1, independent: true, cycle: false})
Class.miniVulcbrid = makeOver('miniVulc', "Crowd Control", {count: 1, independent: true, cycle: false})

//auto hybrid tanks
Class.autotwinbrid = makeOver('autoTwin', "Auto-Twinbrid", {count: 1, independent: true, cycle: false})
Class.autosnipebrid = makeOver('autoSniper', "Auto-Snipebrid", {count: 1, independent: true, cycle: false})
Class.automachbrid = makeOver('autoMach', "Auto-Machbrid", {count: 1, independent: true, cycle: false})
Class.autoflankbrid = makeOver('autoFlank', "Auto-Flankbrid", {count: 1, independent: true, cycle: false})
Class.autopoundbrid = makeOver('autoPound', "Scratcherbrid", {count: 1, independent: true, cycle: false})
Class.autotrapbrid = makeOver('autoTrap', "Auto-Trapbrid", {count: 1, independent: true, cycle: false})
Class.autodesmosbrid = makeOver('autoDesmos', "Chartebrid", {count: 1, independent: true, cycle: false})
Class.autobascrid = makeOver('autoBasic', "Auto-Basebrid", {count: 1, independent: true, cycle: false})
Class.autoinceptionbrid = makeOver('autoinception', "Deployerbrid", {count: 1, independent: true, cycle: false})
Class.autolittleHunterbrid = makeOver('autolittleHunter', "Auto-Subbrid", {count: 1, independent: true, cycle: false})
Class.autopropelbrid = makeOver('autoPropel', "Grazerbrid", {count: 1, independent: true, cycle: false})
Class.autolittleArtillerybrid = makeOver('autolittleArtillery', "Quessadilabrid", {count: 1, independent: true, cycle: false})
Class.autoauto2brid = makeOver('autoauto2', "Auto²-2brid", {count: 1, independent: true, cycle: false})

//hybrid drive tanks
Class.car = makeOver('basic', "Car", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.mercedes = makeOver('twin', "Mercedes", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.tesla = makeOver('sniper', "Tesla", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.toyota = makeOver('machineGun', "Toyota", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.ford = makeOver('flankGuard', "Ford", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.honda = makeOver('pounder', "Honda", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.gmc = makeOver('trapper', "GMC", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.porsche = makeOver('autoBasic', "Porsche", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.mazda = makeOver('desmos', "Mazda", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.volkswagen = makeOver('littleHunter', "Volkswagen", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.audi = makeOver('inception', "Audi", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.mustang = makeOver('propel', "Mustang", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.ferrari = makeOver('auto2', "Ferrari", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.ram = makeOver('lancer', "Ram", {count: 1, independent: true, cycle: false, type: "turretedDrone"})
Class.chrysler = makeOver('littleArtillery', "Chrysler", {count: 1, independent: true, cycle: false, type: "turretedDrone"})

//Ceptions
Class.basicCeption = makeCeption('basic', "Basiception");
Class.twinCeption = makeCeption('twin', "Twinception");
Class.snipeCeption = makeCeption('sniper', "Snipeception");
Class.machCeption = makeCeption('machineGun', "Machception");
Class.flankCeption = makeCeption('flankGuard', "Flankception");
Class.directCeption = makeCeption('director', "Droneception");
Class.poundCeption = makeCeption('pounder', "Poundception");
Class.trapCeption = makeCeption('trapper', "Trapception");
Class.desmosCeption = makeCeption('desmos', "Desmosception");
Class.bascridCeption = makeCeption('bascrid', "Baseception");
Class.littleHunterCeption = makeCeption('littleHunter', "Subception");
Class.inceptCeption = makeCeption('inception', "Incepticon");
Class.propelCeption = makeCeption('propel', "Propeleception");
Class.lancerception = makeAuto('lancer', "Lanceception");
Class.auto2Ception = makeCeption('auto2', "Auto-2²");
Class.revoception = makeCeption('revolutionist', "revonception");
Class.littleArtilleryCeption = makeCeption('littleArtillery', "Shotception")

//Trackers
Class.trackerSmasher = makeAuto('smasher', "Scanner", {type: 'tracker3gun'});
Class.trackerSniper = makeAuto('sniper', "Marksman", {type: 'tracker3gun'});
Class.trackerAssassin = makeAuto('assassin', "Hitman", {type: 'tracker3gun'});
Class.trackerHunter = makeAuto('hunter', "Pinner", {type: 'tracker3gun'});
Class.trackerMini = makeAuto('minigun', "Scout", {type: 'tracker3gun'});
Class.trackerRifle = makeAuto('rifle', "DMR", {type: 'tracker3gun'});
Class.trackerTwinsniper = makeAuto('twinsniper', "Bolt Action", {type: 'tracker3gun'});
Class.trackerSniperHybrid = makeAuto('snipebrid', "Camper", {type: 'tracker3gun'});
Class.trackerAcid = makeAuto('acid', "Arsenic", {type: 'tracker3gun'});
Class.trackerChill = makeAuto('chiller', "Devils Breath", {type: 'tracker3gun'});
Class.trackerSnipeArtillery = makeAuto('littleSnipeArtillery', "U.A.V.", {type: 'tracker3gun'});

//Homing Auto Tanks
Class.homingautoBasic = makeAuto("basic", "Homing Auto-Basic", {type: 'homingAutoTurret'});
Class.homingautoTwin = makeAuto("twin", "Homing Auto-Twin", {type: 'homingAutoTurret'});
Class.homingautoMach = makeAuto("machineGun", "Homing Auto-Machine", {type: 'homingAutoTurret'});
Class.homingautoSniper = makeAuto("sniper", "Homing Auto-Sniper", {type: 'homingAutoTurret'});
Class.homingautoFlank = makeAuto("flankGuard", "Homing Auto-Flank", {type: 'homingAutoTurret'});
Class.homingautoDirector = makeAuto("director", "Homing Chairman", {type: 'homingAutoTurret'});
Class.homingautoPound = makeAuto("pounder", "Homing Scratcher", {type: 'homingAutoTurret'});
Class.homingautoTrap = makeAuto("trapper", "Homing Auto-Trapper", {type: 'homingAutoTurret'});
Class.homingautoDesmos = makeAuto("desmos", "Homing Charter", {type: 'homingAutoTurret'});
Class.homingautobascrid = makeAuto("bascrid", "Homing Auto-Basebrid", {type: 'homingAutoTurret'})
Class.homingautolittleHunter = makeAuto("littleHunter", "Homing Duelist", {type: 'homingAutoTurret'})
Class.homingautoinception = makeAuto("inception", "Homing Deployer", {type: 'homingAutoTurret'});
Class.homingautopropel = makeAuto("propel", "Homing Grazer", {type: 'homingAutoTurret'});
Class.homingautoauto2 = makeAuto("auto2", "Homing Auto²-2", {type: 'homingAutoTurret'});
Class.homingautolancer = makeAuto("lancer", "Homing Lancer", {type: 'homingAutoTurret'});
Class.homingautolittleArtillery = makeAuto("littleArtillery", "Taco", {type: 'homingAutoTurret'})

//Auras
Class.auraBasic = makeAura(Class.basic);
Class.auraTwin = makeAura(Class.twin);
Class.auraSniper = makeAura(Class.sniper);
Class.auraMachineGun = makeAura(Class.machineGun);
Class.auraFlankGuard = makeAura(Class.flankGuard);
Class.auraDirector = makeAura(Class.director);
Class.auraPounder = makeAura(Class.pounder);
Class.auraTrapper = makeAura(Class.trapper);
Class.auraAutoBasic = makeAura(Class.autoBasic);
Class.auraBascrid = makeAura(Class.bascrid);
Class.auraLittleHunter = makeAura(Class.littleHunter);
Class.auraInception = makeAura(Class.inception);
Class.auraPropel = makeAura(Class.propel);
Class.auraDesmos = makeAura(Class.desmos);
Class.auraAuto2 = makeAura(Class.auto2);
Class.auraLittleArtillery = makeAura(Class.littleArtillery);
Class.auraSmasher = makeAura(Class.smasher);

Class.damageAuraBasic = makeAura(Class.basic, "Omen Basic", {type: 'auraDamageGen'});
Class.damageAuraTwin = makeAura(Class.twin, "Omen Twin", {type: 'auraDamageGen'});
Class.damageAuraSniper = makeAura(Class.sniper, "Omen Sniper", {type: 'auraDamageGen'});
Class.damageAuraMachineGun = makeAura(Class.machineGun, "Omen Machine Gun", {type: 'auraDamageGen'});
Class.damageAuraFlankGuard = makeAura(Class.flankGuard, "Omen Flank Guard", {type: 'auraDamageGen'});
Class.damageAuraDirector = makeAura(Class.director, "Omen Director", {type: 'auraDamageGen'});
Class.damageAuraPounder = makeAura(Class.pounder, "Omen Pounder", {type: 'auraDamageGen'});
Class.damageAuraTrapper = makeAura(Class.trapper, "Omen Trapper", {type: 'auraDamageGen'});
Class.damageAuraAutoBasic = makeAura(Class.autoBasic, "Omen Auto-Basic", {type: 'auraDamageGen'});
Class.damageAuraBascrid = makeAura(Class.bascrid, "Omen Basebrid", {type: 'auraDamageGen'});
Class.damageAuraLittleHunter = makeAura(Class.littleHunter, "Omen Subduer", {type: 'auraDamageGen'});
Class.damageAuraInception = makeAura(Class.inception, "Omen Inception", {type: 'auraDamageGen'});
Class.damageAuraPropel = makeAura(Class.propel, "Omen Propeller", {type: 'auraDamageGen'});
Class.damageAuraDesmos = makeAura(Class.desmos, "Omen Desmos", {type: 'auraDamageGen'});
Class.damageAuraAuto2 = makeAura(Class.auto2, "Omen Auto-2", {type: 'auraDamageGen'});
Class.damageAuraLancer = makeAura(Class.lancer, "Omen Lancer", {type: 'auraDamageGen'});
Class.damageAuraLittleArtillery = makeAura(Class.littleArtillery, "Omen Minishot", {type: 'auraDamageGen'});

Class.rangeAuraBasic = makeAura(Class.basic, "Mega-Aura Basic", {type: 'auraRangeGen'});
Class.rangeAuraTwin = makeAura(Class.twin, "Mega-Aura Twin", {type: 'auraRangeGen'});
Class.rangeAuraSniper = makeAura(Class.sniper, "Mega-Aura Sniper", {type: 'auraRangeGen'});
Class.rangeAuraMachineGun = makeAura(Class.machineGun, "Mega-Aura Machine Gun", {type: 'auraRangeGen'});
Class.rangeAuraFlankGuard = makeAura(Class.flankGuard, "Mega-Aura Flank Guard", {type: 'auraRangeGen'});
Class.rangeAuraDirector = makeAura(Class.director, "Mega-Aura Director", {type: 'auraRangeGen'});
Class.rangeAuraPounder = makeAura(Class.pounder, "Mega-Aura Pounder", {type: 'auraRangeGen'});
Class.rangeAuraTrapper = makeAura(Class.trapper, "Mega-Aura Trapper", {type: 'auraRangeGen'});
Class.rangeAuraAutoBasic = makeAura(Class.autoBasic, "Mega-Aura Auto-Basic", {type: 'auraRangeGen'});
Class.rangeAuraBascrid = makeAura(Class.bascrid, "Mega-Aura Bascrid", {type: 'auraRangeGen'});
Class.rangeAuraLittleHunter = makeAura(Class.littleHunter, "Mega-Aura Subduer", {type: 'auraRangeGen'});
Class.rangeAuraInception = makeAura(Class.inception, "Mega-Aura Inception", {type: 'auraRangeGen'});
Class.rangeAuraPropel = makeAura(Class.propel, "Mega-Aura Propeller", {type: 'auraRangeGen'});
Class.rangeAuraDesmos = makeAura(Class.desmos, "Mega-Aura Desmos", {type: 'auraRangeGen'});
Class.rangeAuraAuto2 = makeAura(Class.auto2, "Mega-Aura Auto-2", {type: 'auraRangeGen'});
Class.rangeAuraLancer = makeAura(Class.lancer, "Mega-Aura Lancer", {type: 'auraRangeGen'});
Class.rangeAuraLittleArtillery = makeAura(Class.littleArtillery, "Mega-Aura Minishot", {type: 'auraRangeGen'});

Class.damagerangeAuraBasic = makeAura(Class.basic, "Mega-Omen Basic", {type: 'auraDamageRangeGen'});
Class.moredamageAuraBasic = makeAura(Class.basic, "X-Omen Basic", {type: 'auraMoreDamageGen'});
Class.morerangeAuraBasic = makeAura(Class.basic, "X-Mega-Aura Basic", {type: 'auraMoreRangeGen'});

//Twin
Class.auraDoubleTwin = makeAura(Class.doubleTwin);
Class.auraTripleShot = makeAura(Class.tripleShot);

//Snipe
Class.auraAssassin = makeAura(Class.assassin);
Class.auraHunter = makeAura(Class.hunter);
Class.auraRifle = makeAura(Class.rifle);
Class.auraTrackerSniper = makeAura(Class.trackerSniper);
Class.auraTwinSniper = makeAura(Class.twinsniper);
Class.auraAcid = makeAura(Class.acid);
Class.auraChiller = makeAura(Class.chiller);

//Mach
Class.auraMinigun = makeAura(Class.minigun);
Class.auraGunner = makeAura(Class.gunner);
Class.auraSprayer = makeAura(Class.sprayer);
Class.auraGatlinggun = makeAura(Class.gatlinggun);
Class.auraMiniVulc = makeAura(Class.miniVulc);

//Flank
Class.auraHexaTank = makeAura(Class.hexaTank);
Class.auraTriAngle = makeAura(Class.triAngle);
Class.auraAuto3 = makeAura(Class.auto3);
Class.auraBackShield = makeAura(Class.backShield);

//drone
Class.auraOverseer = makeAura(Class.overseer);
Class.auraCruiser = makeAura(Class.cruiser);
Class.auraUnderseer = makeAura(Class.underseer);
Class.auraSpawner = makeAura(Class.spawner);
Class.auraDirectdrive = makeAura(Class.directdrive);
Class.auraNoble = makeAura(Class.noble);

//pound
Class.auraDestroyer = makeAura(Class.destroyer);
Class.auraArtillery = makeAura(Class.artillery);
Class.auraLauncher = makeAura(Class.launcher);

//trap
Class.auraBuilder = makeAura(Class.builder);
Class.auraTriTrapper = makeAura(Class.triTrapper);
Class.auraTrapGuard = makeAura(Class.trapGuard);
Class.auraWark = makeAura(Class.wark);
Class.auraIceTrapper = makeAura(Class.icetrapper);

//Auto
Class.auraAutoTwin = makeAura(Class.autoTwin);
Class.auraAutoSniper = makeAura(Class.autoSniper);
Class.auraAutoMach = makeAura(Class.autoMach);
Class.auraAutoFlank = makeAura(Class.autoFlank);
Class.auraAutoDirector = makeAura(Class.autoDirector);
Class.auraAutoPound = makeAura(Class.autoPound);
Class.auraAutoTrap = makeAura(Class.autoTrap);
Class.auraAutoDesmos = makeAura(Class.autoDesmos);
Class.auraRevolutionist = makeAura(Class.revolutionist);
Class.auraAutoLittleHunter = makeAura(Class.autolittleHunter);
Class.auraAutoInception = makeAura(Class.autoinception);
Class.auraAutoAuto2 = makeAura(Class.autoauto2);
Class.auraAutoLancer = makeAura(Class.autolancer);
Class.auraAutoPropel = makeAura(Class.autoPropel);
Class.auraAutoLittleArtillery = makeAura(Class.autolittleArtillery);
Class.auraBasicCeption = makeAura(Class.basicCeption);
Class.auraHomingautoBasic = makeAura(Class.homingautoBasic);

//Brid
Class.auratwinbrid = makeAura(Class.twinbrid);
Class.aurasnipebrid = makeAura(Class.snipebrid);
Class.auramachbrid = makeAura(Class.machbrid);
Class.auraflankbrid = makeAura(Class.flankbrid);
Class.aurapoundbrid = makeAura(Class.poundbrid);
Class.auratrapbrid = makeAura(Class.trapbrid);
Class.auraautobascrid = makeAura(Class.autobascrid);
Class.auradesmosbrid = makeAura(Class.desmosbrid);
Class.auralittlehunterbrid = makeAura(Class.littleHunterbrid);
Class.aurainceptionbrid = makeAura(Class.inceptionbrid);
Class.aurapropelbrid = makeAura(Class.auto2brid);
Class.auraauto2brid = makeAura(Class.auto2brid);
Class.auralancebrid = makeAura(Class.lancebrid);
Class.auralittleartillerybrid = makeAura(Class.littleArtillerybrid)
Class.jeep = makeAura(Class.car, "Jeep");

//Sub
Class.auraBinary = makeAura(Class.binary);
Class.auraContagion = makeAura(Class.contagion);
Class.auraGundirector = makeAura(Class.gundirector);
Class.auraBigSubduer = makeAura(Class.bigSubduer);
Class.auraFlankdue = makeAura(Class.flankdue);

//Incep
Class.auraInceptionist = makeAura(Class.inceptionist)
Class.auraMachinception = makeAura(Class.machinception);
Class.auraTailgator = makeAura(Class.tailgator);
Class.auraFlankinception = makeAura(Class.flankinception);

//Desmos
Class.auraSidewinder = makeAura(Class.sidewinder);
Class.auraHelix = makeAura(Class.helix);
Class.auraUndertow = makeAura(Class.undertow);
Class.auraRepeater = makeAura(Class.repeater);

//Swivel
Class.auraSwivel2 = makeAura(Class.swivel2);

//Lance
Class.auraLancer = makeAura(Class.lancer);
Class.auraChasseur = makeAura(Class.chasseur);
Class.auraBayonet = makeAura(Class.bayonet);

//Prop
Class.auraBateau = makeAura(Class.bateau);
Class.auraJouster = makeAura(Class.jouster);

Class.auraLittleMortar = makeAura(Class.littleMortar);
Class.auraLittleTwinArtillery = makeAura(Class.littleTwinArtillery);
Class.auraLittleSnipeArtillery = makeAura(Class.littleSnipeArtillery);
Class.auraLittleMachArtillery = makeAura(Class.littleMachArtillery);
Class.auraLittleFlankArtillery = makeAura(Class.littleFlankArtillery);
Class.auraLittleDirectArtillery = makeAura(Class.littleDirectArtillery);
Class.auraLittleTrapArtillery = makeAura(Class.littleTrapArtillery);
Class.auraLittleSineArtillery = makeAura(Class.littleSineArtillery);
Class.auraLittleSubArtillery = makeAura(Class.littleSubArtillery);
Class.auraLittleIncepArtillery = makeAura(Class.littleIncepArtillery);
Class.auraLittlePropArtillery = makeAura(Class.littlePropArtillery);
Class.auraLittleLanceArtillery = makeAura(Class.littleLanceArtillery);

// TANK UPGRADE PATHS
Class.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "pounder", "trapper", /*"autoBasic", */"desmos", /*"bascrid", */"littleHunter", "inception", "propel", "lancer", /*"auto2", "auraBasic", */"whirlwind", "littleArtillery"]
    Class.basic.UPGRADES_TIER_2 = ["smasher", "cloner"]

        Class.smasher.UPGRADES_TIER_3 = ["megaSmasher", "spike", "landmine", "pion", "trackerSmasher", "saturn", "skater", "acidsmasher", "flail", "autoSmasher", "auraSmasher", "jumpSmasher"]
        Class.healer.UPGRADES_TIER_3 = ["medic", "ambulance", "surgeon", "paramedic"]
        Class.cloner.UPGRADES_TIER_3 = ["hivemind", "autoCloner", "clonebrid"]

    Class.twin.UPGRADES_TIER_2 = ["doubleTwin", "tripleShot", "gunner", "hexaTank", "helix", "wark", "binary", "twinsniper", "littleTwinArtillery", "autoTwin", "twinbrid", "auraTwin"]
        Class.twin.UPGRADES_TIER_3 = ["attacker"]
        Class.doubleTwin.UPGRADES_TIER_3 = ["tripleTwin", "hewnDouble", "bulwark", "autoDouble", "bentDouble", "doubletwinbrid", "auraDoubleTwin"]
        Class.tripleShot.UPGRADES_TIER_3 = ["pentaShot", "spreadshot", "bentDouble", "triplet", "autoTripleShot", "triplex", "bentHybrid", "trinary", "auraTripleShot"]

    Class.sniper.UPGRADES_TIER_2 = ["assassin", "hunter", "minigun", "rifle", "twinsniper", "autoSniper", "snipebrid", "trackerSniper", "acid", "chiller", "chasseur", "littleSnipeArtillery", "auraSniper"]
        Class.sniper.UPGRADES_TIER_3 = ["bushwhacker", "flashfire"]
        Class.assassin.UPGRADES_TIER_3 = ["ranger", "xHunter", "falcon", "stalker", "autoAssassin", "assbrid", "trackerAssassin", "disintegrator", "freezer", "auraAssassin", "single"]
        Class.hunter.UPGRADES_TIER_3 = ["predator", "xHunter", "poacher", "ordnance", "railgun", "dual", "wakizashi", "autoHunter", "trackerHunter", 'auraHunter']
        Class.rifle.UPGRADES_TIER_3 = ["musket", "crossbow", "armsman", "autoRifle", "trackerRifle", "auraRifle"]
        Class.trackerSniper.UPGRADES_TIER_3 = ["trackerAssassin", "trackerHunter", "trackerMini", "trackerRifle", "trackerTwinsniper", "trackerSniperHybrid", "trackerAcid", "trackerChill", "trackerSnipeArtillery", "auraTrackerSniper"]
        Class.twinsniper.UPGRADES_TIER_3 = ["dual", "musket", "autoTwinsniper", "twipebrid", "trackerTwinsniper", "auraTwinSniper"]
        Class.acid.UPGRADES_TIER_3 = ["disintegrator", "acidsmasher", "formaldehyde", "frostbite", "autoAcid", "acidbrid", "trackerAcid", "auraAcid"]
        Class.chiller.UPGRADES_TIER_3 = ["freezer", "icegun", "frostbite", "autoChill", "chillbrid", "trackerChill", "auraChiller", "surge"]

    Class.machineGun.UPGRADES_TIER_2 = ["artillery", "minigun", "gunner", "sprayer", "gatlinggun", "accelmachinegun", "autoMach", "machbrid", "machinception", "miniVulc", "littleMachArtillery", "auraMachineGun"]
        Class.minigun.UPGRADES_TIER_3 = ["streamliner", "nailgun", "cropDuster", "barricade", "vulture", "minilaser", "formaldehyde", "icegun", "autoMini", "trackerMini", "accelminigun", "auraMinigun"]
        Class.gunner.UPGRADES_TIER_3 = ["autoGunner", "nailgun", "auto4", "machineGunner", "gunnerTrapper", "cyclone", "overgunner", "waterfall", "helecopter", "auraGunner"]
        Class.sprayer.UPGRADES_TIER_3 = ["redistributor", "phoenix", "atomizer", "focal", "Sprayinception", "autoSprayer", "spraybrid", "auraSprayer"]
        Class.gatlinggun.UPGRADES_TIER_3 = ["focal", "Gatlinception", "accelgatlinggun", "autoGatlinggun", "gatlinggunbrid", "auraGatlinggun"]
        Class.miniVulc.UPGRADES_TIER_3 = ["nailgun", "vulcan", "miniVulcTrap", "autominiVulc", "miniVulcbrid", "auraMiniVulc"]

    Class.flankGuard.UPGRADES_TIER_2 = ["hexaTank", "triAngle", "auto3", "trapGuard", "triTrapper", "autoFlank", "flankbrid", "flankdue", /*"flankinception", */"backShield", "littleFlankArtillery", "auraFlankGuard"]
        Class.flankGuard.UPGRADES_TIER_3 = ["tripleTwin", "quadruplex"]
        Class.hexaTank.UPGRADES_TIER_3 = ["octoTank", "cyclone", "hexaTrapper", "autoHexaTank", "hexatankbrid", "auraHexaTank", "hexaWhirl"]
        Class.triAngle.UPGRADES_TIER_3 = ["fighter", "booster", "falcon", "bomber", "autoTriAngle", "trianglebrid", "surfer", "eagle", "phoenix", "vulture", "subway", "helecopter", "trailblazer", "rocker", "cockatiel", "auraTriAngle"]
        Class.backShield.UPGRADES_TIER_3 = ["bigBackShield", "brella", "slasher", "attacker", "autoBackShield", "backshieldbrid", "auraBackShield"]

    Class.director.UPGRADES_TIER_2 = ["overseer", "cruiser", "underseer", "gundirector", "spawner", "directdrive", "noble", "autoDirector", "littleDirectArtillery", "auraDirector"]
        Class.director.UPGRADES_TIER_3 = ["manager", "bigCheese"]
        Class.overseer.UPGRADES_TIER_3 = ["overlord", "overtrapper", "overgunner", "banshee", "autoOverseer", "trojan", "overdrive", "commander", "helium", "auraOverseer"]
        Class.cruiser.UPGRADES_TIER_3 = ["carrier", "battleship", "fortress", "surfer", "wyrm", "autoCruiser", "commander", "neon", "auraCruiser"]
        Class.underseer.UPGRADES_TIER_3 = ["necromancer", "maleficitor", "infestor", "autoUnderseer", "argon", "auraUnderseer"/* "prophet",*/]
        Class.spawner.UPGRADES_TIER_3 = ["factory", "protist", "polygun", "autoSpawner", "xenon", "auraSpawner"]
        Class.directdrive.UPGRADES_TIER_3 = ["overdrive", "cruiserdrive", "revodirector", "honda", "dictator", "radon", "autoMotor", "auraDirectdrive"]
        Class.noble.UPGRADES_TIER_3 = ["helium", "neon", "argon", "krypton", "xenon", "radon", "oganesson", "auraNoble"]

    Class.pounder.UPGRADES_TIER_2 = ["destroyer", "builder", "artillery", "launcher", "autoPound", "poundbrid", "tailgator", "auraPounder"]
        Class.pounder.UPGRADES_TIER_3 = ["shotgun", "eagle"]
        Class.destroyer.UPGRADES_TIER_3 = ["conqueror", "annihilator", "hybrid", "construct", "autoDestroy", "waterfall", "interceptor", "auraDestroyer"]
        Class.artillery.UPGRADES_TIER_3 = ["mortar", "ordnance", "beekeeper", "fieldGun", "autoArtillery", "artilbrid", "auraArtillery", "munition"]
        Class.launcher.UPGRADES_TIER_3 = ["skimmer", "twister", "swarmer", "rocketeer", "fieldGun", "shrapnelgun", "firecracker", "autoLaunch", "launchbrid", "auraLauncher", "vortex"]

    Class.trapper.UPGRADES_TIER_2 = ["builder", "triTrapper", "trapGuard", "wark", "contagion", "icetrapper", "autoTrap", "trapbrid", "littleTrapArtillery", "auraTrapper"]
        Class.trapper.UPGRADES_TIER_3 = ["barricade"]
        Class.builder.UPGRADES_TIER_3 = ["construct", "engineer", "boomer", "assembler", "architect", "conqueror", "fort", "icebuilder", "autoBuilder", "builderbrid", "auraBuilder"]
        Class.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "septaTrapper", "architect", "triContagion", "icetriTrapper", "tritrapperbrid", "auraTriTrapper"]
        Class.trapGuard.UPGRADES_TIER_3 = ["bushwhacker", "gunnerTrapper", "bomber", "conqueror", "bulwark", "icetrapGuard", "miniVulcTrap", "autoTrapGuard", "trapguardbrid", "auraTrapGuard", "whirlGuard"]
        Class.wark.UPGRADES_TIER_3 = ["bulwark", "twincontagion", "icewark", "autowark", "warkbrid", "auraWark"]
        Class.icetrapper.UPGRADES_TIER_3 = ["icebuilder", "icetriTrapper", "icetrapGuard", "icewark", "icecontagion", "autoIcetrapper", "icetrapbrid", "auraIceTrapper"]

    Class.autoBasic.UPGRADES_TIER_2 = ["autoTwin", "autoSniper", "autoMach", "autoFlank", "autoDirector", "autoPound", "autoTrap", "autoDesmos", "autobascrid", "autolittleHunter", "autoinception", "autoPropel", "autolancer", "autoauto2", "autolittleArtillery", "auraAutoBasic", "homingautoBasic"]
        Class.autoBasic.UPGRADES_TIER_3 = ["autoSmasher", "autoCloner"]
        Class.autoTwin.UPGRADES_TIER_3 = ["autoDouble", "autoTripleShot", "autoGunner", "autoHexaTank", "autoHelix", "autowark", "equilibrium", "autoBinary", "autoTwinsniper", "autolittleTwinArtillery", "autotwinbrid", "auraAutoTwin", "homingautoTwin"]
        Class.autoSniper.UPGRADES_TIER_3 = ["autoAssassin", "autoHunter", "autoMini", "autoRifle", "autoTwinsniper", "autoAcid", "autoChill", "autosnipebrid", "autochasseur", "autolittleSnipeArtillery", "auraAutoSniper", "homingautoSniper"]
        Class.autoMach.UPGRADES_TIER_3 = ["autoArtillery", "autoMini", "autoGunner", "autoSprayer", "autoGatlinggun", "automachbrid", "automachinception", "autolittleMachArtillery", "auraAutoMach", "homingautoMach"]
        Class.autoFlank.UPGRADES_TIER_3 = ["autoHexaTank", "autoTriAngle", "autoAuto3", "autoTrapGuard", "hexaTrapper", "autoflankbrid", "autoFlankdue", "autoflankinception", "autolittleFlankArtillery", "auraAutoFlank", "homingautoFlank"]
        Class.autoDirector.UPGRADES_TIER_3 = ["autoOverseer", "autoCruiser", "autoUnderseer", "autoGundirector", "autoSpawner", "autolittleDirectArtillery", "auraAutoDirector", "homingautoDirector"]
        Class.autoPound.UPGRADES_TIER_3 = ["autoDestroy", "autoBuilder", "autoArtillery", "autoLaunch", "autopoundbrid", "autotailgator", "auraAutoPound", "homingautoPound"]
        Class.autoTrap.UPGRADES_TIER_3 = ["autoBuilder", "hexaTrapper", "autoTrapGuard", "autoContagion", "autowark", "autoIcetrapper", "autolittleTrapArtillery", "autotrapbrid", "auraAutoTrap", "homingautoTrap", "trapCeption"]
        Class.autoDesmos.UPGRADES_TIER_3 = ["autoHelix", "autoUndertow", "autoRepeater", "autodesmosbrid", "autolittleSineArtillery", "auraAutoDesmos", "homingautoDesmos"]
        Class.autolittleHunter.UPGRADES_TIER_3 = ["autoMini", "autoBinary", "autoHunter", "autoSprayer", "autoContagion", "autoGundirector", "autoBigSubduer", "autoFlankdue", "autobayonet", "autolittleHunterbrid", "autolittleSubArtillery", "auraAutoLittleHunter", "homingautolittleHunter"]
        Class.autoinception.UPGRADES_TIER_3 = ["autoinceptionist", "automachinception", "autotailgator", "autoflankinception", "autoinceptionbrid", "autolittleIncepArtillery", "auraAutoInception", "homingautoinception"]
        Class.autoPropel.UPGRADES_TIER_3 = ["autoTriAngle", "autoBateau", "autoJouster", "autopropelbrid", "autolittlePropArtillery", "auraAutoPropel", "homingautopropel"]
        Class.autoauto2.UPGRADES_TIER_3 = ["autoAuto3", "autoRevolutionist", "autoSwivel2", "autoauto2brid", "auraAutoAuto2", "homingautoauto2"]
        Class.autolancer.UPGRADES_TIER_3 = ["autochasseur", "autoJouster", "autobayonet", "autolancebrid", "autolittleLanceArtillery", "auraAutoLancer", "homingautolancer"]
        Class.basicCeption.UPGRADES_TIER_3 = ["twinCeption", "snipeCeption", "machCeption", "flankCeption", "directCeption", "poundCeption", "trapCeption", "desmosCeption", "bascridCeption", "littleHunterCeption", "inceptCeption", "propelCeption", "lancerception", "auto2Ception", "auraBasicCeption"]
        Class.homingautoBasic.UPGRADES_TIER_3 = ["homingautoTwin", "homingautoSniper", "homingautoMach", "homingautoFlank", "homingautoDirector", "homingautoPound", "homingautoTrap", "homingautoDesmos", "homingautobascrid", "homingautolittleHunter", "homingautoinception", "homingautopropel", "homingautolancer", "homingautoauto2", "homingautolittleArtillery", "auraHomingautoBasic"]

    Class.bascrid.UPGRADES_TIER_2 = ["twinbrid", "snipebrid", "machbrid", "flankbrid", "overseer", "poundbrid", "trapbrid", "autobascrid", "desmosbrid", "littleHunterbrid", "inceptionbrid", "lancebrid", "auto2brid", "car", "auraBascrid"]
        Class.bascrid.UPGRADES_TIER_3 = ["clonebrid"]
        Class.twinbrid.UPGRADES_TIER_3 = ["doubletwinbrid", "bentHybrid", "overgunner", "hexatankbrid", "autotwinbrid", "helixbrid", "warkbrid", "binarybrid", "twipebrid", "littleTwinArtillerybrid", "mercedes", "auratwinbrid"]
        Class.snipebrid.UPGRADES_TIER_3 = ["assbrid", "poacher", "cropDuster", "armsman", "twipebrid", "autosnipebrid", "trackerSniperHybrid", "acidbrid", "chillbrid", "chasseubrid", "littleSnipeArtillerybrid", "tesla", "aurasnipebrid"]
        Class.machbrid.UPGRADES_TIER_3 = ["artilbrid", "cropDuster", "overgunner", "spraybrid", "gatlinggunbrid", "automachbrid", "machinceptionbrid", "littleMachArtillerybrid", "toyota", "auramachbrid"]
        Class.flankbrid.UPGRADES_TIER_3 = ["hexatankbrid", "trianglebrid", "auto3brid", "trapguardbrid", "tritrapperbrid", "autoflankbrid", "flankduebrid", "flankinceptionbrid", "littleFlankArtillerybrid", "ford", "auraflankbrid"]
        Class.poundbrid.UPGRADES_TIER_3 = ["hybrid", "builderbrid", "artilbrid", "launchbrid", "autopoundbrid", "tailgatorbrid", "honda", "aurapoundbrid"]
        Class.trapbrid.UPGRADES_TIER_3 = ["builderbrid", "tritrapperbrid", "trapguardbrid", "contagionbrid", "warkbrid", "icetrapbrid", "autotrapbrid", "overtrapper", "littleTrapArtillerybrid", "gmc", "auratrapbrid"]
        Class.autobascrid.UPGRADES_TIER_3 = ["autotwinbrid", "autosnipebrid", "automachbrid", "autoflankbrid", "autopoundbrid", "autotrapbrid", "autodesmosbrid", "autolittleHunterbrid", "autoinceptionbrid", "autopropelbrid", "autolancebrid", "porsche", "auraautobascrid"]
        Class.desmosbrid.UPGRADES_TIER_3 = ["helixbrid", "undertowbrid", "repeaterbrid", "autodesmosbrid", "littleSineArtillerybrid", "mazda", "auradesmosbrid"]
        Class.littleHunterbrid.UPGRADES_TIER_3 = ["cropDuster", "binarybrid", "poacher", "spraybrid", "contagionbrid", "bigsubduerbrid", "flankduebrid", "bayonetbrid", "autolittleHunterbrid", "littleSubArtillerybrid", "volkswagen", "auralittlehunterbrid"]
        Class.inceptionbrid.UPGRADES_TIER_3 = ["trianglebrid", "machinceptionbrid", "tailgatorbrid", "flankinceptionbrid", "overdrive", "autoinceptionbrid", "littleIncepArtillerybrid", "audi", "aurainceptionbrid"]
        Class.propelbrid.UPGRADES_TIER_3 = ["trianglebrid", "bateaubrid", "jousterbrid", "autopropelbrid", "littlePropArtillerybrid", "mustang", "aurapropelbrid"]
        Class.auto2brid.UPGRADES_TIER_3 = ["auto3brid", "revobrid", "swivel2brid", "autoauto2brid", "ferrari", "auraauto2brid"]
        Class.lancebrid.UPGRADES_TIER_3 = ["chasseubrid", "jousterbrid", "bayonetbrid", "autolancebrid", "littleLanceArtillerybrid", "ram", "auralancebrid"]
        Class.car.UPGRADES_TIER_3 = ["mercedes", "tesla", "toyota", "ford", "overdrive", "honda", "gmc", "porsche", "mazda", "volkswagen", "audi", "mustang", "ram", "ferrari", "jeep", "chrysler"]

    Class.littleHunter.UPGRADES_TIER_2 = ["minigun", "binary", "hunter", "sprayer", "contagion", "gundirector", "bigSubduer", "flankdue", "bayonet", "autolittleHunter", "littleHunterbrid", "littleSubArtillery", "auraLittleHunter"]
        Class.binary.UPGRADES_TIER_3 = ["trinary", "dual", "twincontagion", "autoBinary", "binarybrid", "auraBinary"]
        Class.contagion.UPGRADES_TIER_3 = ["fort", "triContagion", "twincontagion", "droneTrapper", "cockatiel", "icecontagion", "autoContagion", "contagionbrid", "auraContagion"]
        Class.gundirector.UPGRADES_TIER_3 = ["trojan", "protist", "wyrm", "gundirectorbig", "droneTrapper", "autoGundirector", "krypton", "auraGundirector"]
        Class.bigSubduer.UPGRADES_TIER_3 = ["predator", "redistributor", "biggerSubduer", "clubbin", "autoBigSubduer", "bigsubduerbrid", "auraBigSubduer"]
        Class.flankdue.UPGRADES_TIER_3 = ["subway", "triContagion", "clubbin", "autoFlankdue", "flankduebrid", "auraFlankdue"]
  
    Class.inception.UPGRADES_TIER_2 = ["inceptionist", "machinception", "tailgator", "launcher", /*"flankinception", */"directdrive", "spawner", "autoinception", "inceptionbrid", "littleIncepArtillery", "auraInception"]
        Class.inceptionist.UPGRADES_TIER_3 = ["twinceptionist", "machceptionist", "poundceptionist", /*"flankceptionist", */"factory", "autoinceptionist", "inceptionistbrid", "auraInceptionist"]
        Class.machinception.UPGRADES_TIER_3 = ["machceptionist", "Sprayinception", "Gatlinception", "automachinception", "machinceptionbrid", "auraMachinception"]
        Class.tailgator.UPGRADES_TIER_3 = ["poundceptionist", "interceptor", "engineer", "shrapnelgun", "autotailgator", "tailgatorbrid", "auraTailgator"]
        Class.flankinception.UPGRADES_TIER_3 = ["flankceptionist", "autoflankinception", "flankinceptionbrid", "auraFlankinception"]

    Class.desmos.UPGRADES_TIER_2 = ["helix", "undertow", "repeater", "homingautoBasic", "autoDesmos", "desmosbrid", "littleSineArtillery", "auraDesmos"]
        Class.helix.UPGRADES_TIER_3 = ["triplex", "quadruplex", "duplicator", "autoHelix", "helixbrid", "auraHelix"]
        Class.undertow.UPGRADES_TIER_3 = ["riptide", "choker", "autoUndertow", "undertowbrid", "auraUndertow"]
        Class.repeater.UPGRADES_TIER_3 = ["iterator", "duplicator", "autoRepeater", "repeaterbrid", "auraRepeater"]

    Class.auraBasic.UPGRADES_TIER_2 = ["auraTwin", "auraSniper", "auraMachineGun", "auraFlankGuard", "auraDirector", "auraPounder", "auraTrapper", "auraAutoBasic", "auraDesmos", "auraBascrid", "auraLittleHunter", "auraInception", "auraLancer", "auraAuto2", "damageAuraBasic", "rangeAuraBasic"]
    Class.auraBasic.UPGRADES_TIER_3 = ["auraSmasher"]
        Class.auraTwin.UPGRADES_TIER_3 = ["auraDoubleTwin", "auraTripleShot", "auraGunner", "auraHexaTank", "auraAutoTwin", "auraHelix", "auraWark", "auratwinbrid", "auraBinary", "auraTwinSniper", "auraLittleTwinArtillery", "damageAuraTwin", "rangeAuraTwin"]
        Class.auraSniper.UPGRADES_TIER_3 = ["auraAssassin", "auraHunter", "auraMinigun", "auraRifle", "auraTwinSniper", "auraAutoSniper", "aurasnipebrid", "auraTrackerSniper", "auraAcid", "auraChiller", "auraChasseur", "auraLittleSnipeArtillery", "damageAuraSniper", "rangeAuraSniper"]
        Class.auraMachineGun.UPGRADES_TIER_3 = ["auraArtillery", "auraMinigun", "auraGunner", "auraSprayer", "auraGatlinggun", "auraAutoMach", "auramachbrid", "auraMachinception", "auraLittleMachArtillery", "damageAuraMachineGun", "rangeAuraMachineGun"]
        Class.auraFlankGuard.UPGRADES_TIER_3 = ["auraHexaTank", "auraTriAngle", "auraAuto3", "auraTrapGuard", "auraTriTrapper", "auraAutoFlank", "auraflankbrid", "auraFlankdue", "auraFlankinception", "auraBackShield", "auraLittleFlankArtillery", "damageAuraFlankGuard", "rangeAuraFlankGuard"]
        Class.auraDirector.UPGRADES_TIER_3 = ["auraOverseer", "auraCruiser", "auraUnderseer", "auraSpawner", "auraDirectdrive", "auraAutoDirector", "auraNoble", "auraLittleDirectArtillery", "damageAuraDirector", "rangeAuraDirector"]
        Class.auraPounder.UPGRADES_TIER_3 = ["auraDestroyer", "auraBuilder", "auraArtillery", "auraLauncher", "auraAutoPound", "aurapoundbrid", "auraTailgator", "damageAuraPounder", "rangeAuraPounder"]
        Class.auraTrapper.UPGRADES_TIER_3 = ["auraBuilder", "auraTriTrapper", "auraTrapGuard", "auraContagion", "auraWark", "auraIceTrapper", "auraAutoTrap", "auratrapbrid", "auraLittleTrapArtillery", "damageAuraTrapper", "rangeAuraTrapper"]
        Class.auraAutoBasic.UPGRADES_TIER_3 = ["auraAutoTwin", "auraAutoSniper", "auraAutoMach", "auraAutoFlank", "auraAutoDirector", "auraAutoPound", "auraAutoTrap", "auraAutoDesmos", "auraautobascrid", "auraAutoLittleHunter", "auraAutoInception", "auraHomingautoBasic", "damageAuraAutoBasic", "rangeAuraAutoBasic"]
        Class.auraBascrid.UPGRADES_TIER_3 = ["auratwinbrid", "aurasnipebrid", "auramachbrid", "auraflankbrid", "aurapoundbrid", "auratrapbrid", "auradesmosbrid", "auraautobascrid", "auralittlehunterbrid", "aurainceptionbrid", "jeep", "damageAuraBascrid", "rangeAuraBascrid"]
        Class.auraDesmos.UPGRADES_TIER_3 = ["auraHelix", "auraUndertow", "auraRepeater", "auraAutoDesmos", "auradesmosbrid", "auraLittleSineArtillery", "damageAuraDesmos", "rangeAuraDesmos"]
        Class.auraLittleHunter.UPGRADES_TIER_3 = ["auraMinigun", "auraBinary", "auraHunter", "auraSprayer", "auraContagion", "auraGundirector", "auraBigSubduer", "auraFlankdue", "auraBayonet", "auraAutoLittleHunter", "auralittlehunterbrid", "auraLittleSubArtillery", "damageAuraLittleHunter", "rangeAuraLittleHunter"]
        Class.auraInception.UPGRADES_TIER_3 = ["auraInceptionist", "auraMachinception", "auraTailgator", "auraFlankinception", "auraAutoInception", "aurainceptionbrid", "auraLittleIncepArtillery", "damageAuraInception", "rangeAuraInception"]
        Class.auraPropel.UPGRADES_TIER_3 = ["auraTriAngle", "auraBateau", "auraJouster", "auraAutoPropel", "aurapropelbrid", "auraLittlePropArtillery", "damageAuraPropel", "rangeAuraPropel"]
        Class.auraAuto2.UPGRADES_TIER_3 = ["auraAuto3", "auraRevolutionist", "auraAutoAuto2", "auraauto2brid", "damageAuraAuto2", "rangeAuraAuto2"]
        Class.auraLancer.UPGRADES_TIER_3 = ["auraChasseur", "auraJouster", "auraBayonet", "auraAutoLancer", "auralancebrid", "auraLittleLanceArtillery", "damageAuraLancer", "rangeAuraLancer"]
        Class.damageAuraBasic.UPGRADES_TIER_3 = ["damageAuraTwin", "damageAuraSniper", "damageAuraMachineGun", "damageAuraFlankGuard", "damageAuraDirector", "damageAuraPounder", "damageAuraTrapper", "damageAuraAutoBasic", "damageAuraBascrid", "damageAuraDesmos", "damageAuraLittleHunter", "damageAuraInception", "damageAuraPropel", "damageAuraAuto2", "damageAuraLancer", "moredamageAuraBasic", "damagerangeAuraBasic"]
        Class.rangeAuraBasic.UPGRADES_TIER_3 = ["rangeAuraTwin", "rangeAuraSniper", "rangeAuraMachineGun", "rangeAuraFlankGuard", "rangeAuraDirector", "rangeAuraPounder", "rangeAuraTrapper", "rangeAuraAutoBasic", "rangeAuraBascrid", "rangeAuraDesmos", "rangeAuraLittleHunter", "rangeAuraInception", "rangeAuraPropel", "rangeAuraAuto2", "rangeAuraLancer", "morerangeAuraBasic", "damagerangeAuraBasic"]

  Class.auto2.UPGRADES_TIER_2 = ["auto3", "revolutionist", "swivel2", "autoauto2", "auto2brid", "auraAuto2"]
        Class.auto3.UPGRADES_TIER_3 = ["auto5", "mega3", "auto4", "banshee", "homingautoauto2", "autoAuto3", "auto3brid", "auraAuto3", "whirl3"]
        Class.revolutionist.UPGRADES_TIER_3 = ["subverter", "autoRevolutionist", "proton", "pion", "hadron", "equilibrium", "revobrid", "baseThrower", "revodirector", "saturn", "auraRevolutionist"]
        Class.swivel2.UPGRADES_TIER_3 = ["swivel3", "axis4", "autoSwivel2", "swivel2brid", "auraSwivel2"]

  Class.lancer.UPGRADES_TIER_2 = ["chasseur", "jouster", "bayonet", "autolancer", "lancebrid", "littleLanceArtillery", "auraLancer"]
        Class.lancer.UPGRADES_TIER_3 = ["slasher", "katana"]
        Class.chasseur.UPGRADES_TIER_3 = ["flail", "fencer", "wakizashi", "autochasseur", "chasseubrid", "auraChasseur"]
        Class.bayonet.UPGRADES_TIER_3 = ["choker", "arisaka", "wakizashi", "autobayonet", "bayonetbrid", "auraBayonet"]

  Class.propel.UPGRADES_TIER_2 = ["triAngle", "bateau", "jouster", "autoPropel", "propelbrid", "littlePropArtillery", "auraPropel"]
        Class.propel.UPGRADES_TIER_3 = ["jumpSmasher", "shadow"]
        Class.bateau.UPGRADES_TIER_3 = ["assblaster", "rocker", "knight", "autoBateau", "bateaubrid", "auraBateau"]
        Class.jouster.UPGRADES_TIER_3 = ["trailblazer", "knight", "fencer", "arisaka", "autoJouster", "jousterbrid", "auraJouster"]

  Class.littleArtillery.UPGRADES_TIER_2 = ["littleMortar", "littleTwinArtillery", "littleSnipeArtillery", "littleMachArtillery", "littleFlankArtillery", "littleDirectArtillery", "artillery", "littleTrapArtillery", "littleSineArtillery", "littleSubArtillery", "littleIncepArtillery", "littlePropArtillery", "littleLanceArtillery", "tripleShot", "autolittleArtillery", "littleArtillerybrid", "auraLittleArtillery"]
				Class.littleMortar.UPGRADES_TIER_3 = ["littleSheller", "littleTwinMortar", "littleSnipeMortar", "littleMachMortar", "littleFlankMortar", "littleDirectMortar", "mortar", "littleTrapMortar", "littleDesmosMortar", "littleSubMortar", "littleIncepMortar", "littlePropMortar", "littleLanceMortar", "pentaShot", "machineGunner", "autolittleMortar", "littleMortarbrid", "auraLittleMortar"]
				Class.littleTwinArtillery.UPGRADES_TIER_3 = ["littleTwinMortar", "autolittleTwinArtillery", "littleTwinArtillerybrid", "auraLittleTwinArtillery"]
				Class.littleSnipeArtillery.UPGRADES_TIER_3 = ["crossbow", "littleSnipeMortar", "autolittleSnipeArtillery", "littleSnipeArtillerybrid", "trackerSnipeArtillery", "auraLittleSnipeArtillery"]
				Class.littleMachArtillery.UPGRADES_TIER_3 = ["littleMachMortar", "autolittleMachArtillery", "littleMachArtillerybrid", "auraLittleMachArtillery"]
				Class.littleFlankArtillery.UPGRADES_TIER_3 = ["littleFlankMortar", "autolittleFlankArtillery", "littleFlankArtillerybrid", "auraLittleFlankArtillery"]
				Class.littleDirectArtillery.UPGRADES_TIER_3 = ["littleDirectMortar", "autolittleDirectArtillery", "auraLittleDirectArtillery"]
				Class.littleTrapArtillery.UPGRADES_TIER_3 = ["littleTrapMortar", "autolittleTrapArtillery", "littleTrapArtillerybrid", "auraLittleTrapArtillery"]
				Class.littleSineArtillery.UPGRADES_TIER_3 = ["littleDesmosMortar", "autolittleSineArtillery", "littleSineArtillerybrid", "auraLittleSineArtillery"]
				Class.littleSubArtillery.UPGRADES_TIER_3 = ["littleSubMortar", "autolittleSubArtillery", "littleSubArtillerybrid", "auraLittleSubArtillery"]
				Class.littleIncepArtillery.UPGRADES_TIER_3 = ["littleIncepMortar", "autolittleIncepArtillery", "littleIncepArtillerybrid", "auraLittleIncepArtillery"]
				Class.littlePropArtillery.UPGRADES_TIER_3 = ["littlePropMortar", "autolittlePropArtillery", "littlePropArtillerybrid", "auraLittlePropArtillery"]
				Class.littleLanceArtillery.UPGRADES_TIER_3 = ["littleLanceMortar", "autolittleLanceArtillery", "littleLanceArtillerybrid", "auraLittleLanceArtillery"]
        Class.autolittleArtillery.UPGRADES_TIER_3 = ["autolittleTwinArtillery", "autolittleSnipeArtillery", "autolittleMachArtillery", "autolittleFlankArtillery", "autolittleDirectArtillery", "autoArtillery", "autolittleTrapArtillery", "autolittleSineArtillery", "autolittleSubArtillery", "autolittleIncepArtillery", "autolittlePropArtillery", "autolittleLanceArtillery", "autoTripleShot", "autolittleArtillerybrid", "auraAutoLittleArtillery", /*"littleArtilleryCeption",*/ "homingautolittleArtillery"]
        Class.littleArtillerybrid.UPGRADES_TIER_3 = ["littleMortarbrid", "littleTwinArtillerybrid", "littleSnipeArtillerybrid", "littleMachArtillerybrid", "littleFlankArtillerybrid", "artilbrid", "littleTrapArtillerybrid", "littleSineArtillerybrid", "littleSubArtillerybrid", "littleIncepArtillerybrid", "littlePropArtillerybrid", "littleLanceArtillerybrid", "bentHybrid", "autolittleArtillerybrid", "chrysler", "auralittleartillerybrid"]
        Class.auraLittleArtillery.UPGRADES_TIER_3 = ["auraLittleMortar", "auraLittleTwinArtillery", "auraLittleSnipeArtillery", "auraLittleMachArtillery", "auraLittleFlankArtillery", "auraLittleDirectArtillery", "auraArtillery", "auraLittleTrapArtillery", "auraLittleSineArtillery", "auraLittleSubArtillery", "auraLittleIncepArtillery", "auraLittlePropArtillery", "auraLittleLanceArtillery", "auraTripleShot", "auraAutoLittleArtillery", "auralittleartillerybrid", "damageAuraLittleArtillery", "rangeAuraLittleArtillery"]