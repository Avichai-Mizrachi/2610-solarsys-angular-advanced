"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const functions_1 = require("./functions");
const guards_1 = require("./guards");
const mission_service_1 = require("./mission-service");
const doubleReward = (0, functions_1.buildMultiplier)(2);
const service = new mission_service_1.RescueService(data_1.station.name, doubleReward, 5);
console.log(service.describe());
console.log('Station online:', data_1.station.online);
console.log('Drone:', data_1.drone.name);
console.log('Position:', data_1.drone.position.join(', '));
console.log('Service typeof:', typeof service);
console.log('Rescue service:', service instanceof mission_service_1.RescueService);
const canFly = (mission) => data_1.drone.active && mission.fuelCost <= data_1.drone.fuel;
const available = (0, functions_1.selectMissions)(data_1.missions, canFly);
console.log('Available:', (0, functions_1.getMissionTitles)(available).join(' | '));
available.forEach((mission) => {
    console.log(service.preview(data_1.drone, mission));
});
let total = 0;
for (const mission of available) {
    total += service.calculatePayout(mission);
}
console.log('Total potential payout:', total);
const crew = ['Ada'];
const updatedCrew = (0, functions_1.addToArray)(crew, 'Lin');
console.log('Crew:', updatedCrew.join(', '));
console.log('Original crew size:', crew.length);
const bonusMission = {
    id: 'B1',
    title: 'Find the floating sandwich',
    direction: 'West',
    difficulty: 'easy',
    fuelCost: 5,
    reward: 10
};
const expandedBoard = (0, functions_1.addToArray)(data_1.missions, bonusMission);
console.log('Board sizes:', data_1.missions.length, expandedBoard.length);
console.log('Medium difficulty bonus:', data_1.difficultyBonus['medium']);
const incomingDirection = 'North';
if ((0, guards_1.isDirection)(incomingDirection)) {
    const approvedDirection = incomingDirection;
    console.log('Radio direction:', approvedDirection);
}
else {
    console.log('Rejected radio direction:', incomingDirection);
}
//# sourceMappingURL=main.js.map