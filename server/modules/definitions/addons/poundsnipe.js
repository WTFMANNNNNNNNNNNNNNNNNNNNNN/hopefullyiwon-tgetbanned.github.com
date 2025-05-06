const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeCeption } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('../groups/generics.js');
const g = require('../gunvals.js');

Class.poundsnipesnipe = {
    PARENT: "genericTank",
    LABEL: "Kevin",
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
        },
        {
            POSITION: {
                LENGTH: 1,
                WIDTH: 1
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.lance]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#0000ff"
        }
    }
    ],    
    ON: [
        {
            event: "altFire",
            handler: ({ body }) => {
                body.define("poundsnipe0");
                setTimeout(() => body.define("poundsnipe1"), 250);
                setTimeout(() => body.define("poundsnipe2"), 500);
                setTimeout(() => body.define("poundsnipepound"), 750);

            }
        }
    ],
}
Class.poundsnipe0 = {
    PARENT: "genericTank",
    LABEL: "Kevin",
    BODY: {
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 23.125,
                WIDTH: 9.375
            },
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#4000bf"
        }
    }
    ],
}
Class.poundsnipe1 = {
    PARENT: "genericTank",
    LABEL: "Kevin",
    BODY: {
        FOV: 1.1 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 22.25,
                WIDTH: 10.25
            },
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#800080"
        }
    }
    ],
}
Class.poundsnipe2 = {
    PARENT: "genericTank",
    LABEL: "Kevin",
    BODY: {
        FOV: 1.05 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 21.375,
                WIDTH: 11.125
            },
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#bf0040"
        }
    }
    ],
}
Class.poundsnipepound = {
    PARENT: "genericTank",
    LABEL: "Kevin",
    BODY: {
        FOV: 1 * base.FOV
    },
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
        },        
      {
            POSITION: {
                LENGTH: 1,
                WIDTH: 1
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.lance]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "ff0000"
        }
    }
    ],
    ON: [
        {
            event: "altFire",
            handler: ({ body }) => {
                body.define("poundsnipe2");
                setTimeout(() => body.define("poundsnipe1"), 250);
                setTimeout(() => body.define("poundsnipe0"), 500);
                setTimeout(() => body.define("poundsnipesnipe"), 750);

            }
        }
    ],
}

Class.speedtripletriple = {
    PARENT: "genericTank",
    LABEL: "Speed Triple",
    DANGER: 7,
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 1 * base.DENSITY,
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
        }, 
             {
            POSITION: {
                LENGTH: 1,
                WIDTH: 1
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.lance]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        },{
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#0000ff"
        }
    }
    ],
    ON: [
        {
            event: "altFire",
            handler: ({ body }) => {
                body.define("speedtriple0");
                setTimeout(() => body.define("speedtriple1"), 250);
                setTimeout(() => body.define("speedtriple2"), 500);
                setTimeout(() => body.define("speedtriplespeed"), 750);

            }
        }
    ],
}
Class.speedtriple0 = {
    PARENT: "genericTank",
    LABEL: "Speed Triple",
    DANGER: 7,
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.9 * base.DENSITY,
        SPEED: base.SPEED * 0.925
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18.25,
                WIDTH: 8,
                Y: -1.5,
                ANGLE: -50.625,
                DELAY: 0.5
            },
        },
        {
            POSITION: {
                LENGTH: 18.25,
                WIDTH: 8,
                Y: 1.5,
                ANGLE: 50.625,
                DELAY: 0.5
            },
        },
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 8
            },
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#4000bf"
        }
    }
    ]
}
Class.speedtriple1 = {
    PARENT: "genericTank",
    LABEL: "Speed Triple",
    DANGER: 7,
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.8 * base.DENSITY,
        SPEED: base.SPEED * 0.925
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 17.5,
                WIDTH: 8,
                Y: -1,
                ANGLE: -83.75,
                DELAY: 0.5
            },
        },
        {
            POSITION: {
                LENGTH: 17.5,
                WIDTH: 8,
                Y: 1,
                ANGLE: 83.75,
                DELAY: 0.5
            },
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8
            },
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#800080"
        }
    }
    ]
}
Class.speedtriple2 = {
    PARENT: "genericTank",
    LABEL: "Speed Triple",
    DANGER: 7,
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.7 * base.DENSITY,
        SPEED: base.SPEED * 0.925
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 16.75,
                WIDTH: 8,
                Y: -0.5,
                ANGLE: -116.875,
                DELAY: 0.5
            },
        },
        {
            POSITION: {
                LENGTH: 16.75,
                WIDTH: 8,
                Y: 0.5,
                ANGLE: 116.875,
                DELAY: 0.5
            },
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8
            },
        }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#bf0040"
        }
    }
    ]
}
Class.speedtriplespeed = {
    PARENT: "genericTank",
    LABEL: "Speed Triple",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
        SPEED: base.SPEED * 1
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
             {
            POSITION: {
                LENGTH: 1,
                WIDTH: 1
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.lance]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        },{
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "ff0000"
        }
    }
    ],
    ON: [
        {
            event: "altFire",
            handler: ({ body }) => {
                body.define("speedtriple2");
                setTimeout(() => body.define("speedtriple1"), 250);
                setTimeout(() => body.define("speedtriple0"), 500);
                setTimeout(() => body.define("speedtripletriple"), 750);

            }
        }
    ],
}

Class.sniper.UPGRADES_TIER_3.push("poundsnipesnipe")
Class.pounder.UPGRADES_TIER_3.push("poundsnipepound")
Class.tripleShot.UPGRADES_TIER_3.push("speedtripletriple")
Class.triAngle.UPGRADES_TIER_3.push("speedtriplespeed")
Class.addons.UPGRADES_TIER_0.push("poundsnipesnipe", "speedtripletriple")