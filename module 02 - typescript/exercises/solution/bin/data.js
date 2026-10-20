"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.station = exports.difficultyBonus = exports.missions = exports.drone = void 0;
exports.drone = {
    name: 'Comet',
    fuel: 30,
    active: true,
    position: [0, 0]
};
exports.missions = [
    {
        id: 1,
        title: 'Rescue the moon cat',
        direction: 'North',
        difficulty: 'easy',
        fuelCost: 10,
        reward: 40
    },
    {
        id: 'M2',
        title: 'Deliver pizza to Mars',
        direction: 'East',
        difficulty: 'medium',
        fuelCost: 20,
        reward: 70
    },
    {
        id: 3,
        title: 'Tow the sleepy satellite',
        direction: 'South',
        difficulty: 'hard',
        fuelCost: 45,
        reward: 120
    }
];
exports.difficultyBonus = {
    easy: 0,
    medium: 10,
    hard: 20
};
exports.station = {
    name: 'Orbit Rescue',
    online: true
};
//# sourceMappingURL=data.js.map