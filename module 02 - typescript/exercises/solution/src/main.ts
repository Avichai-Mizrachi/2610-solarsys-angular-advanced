import { difficultyBonus, drone, missions, station } from './data';
import {
    addToArray,
    buildMultiplier,
    getMissionTitles,
    selectMissions
} from './functions';
import { isDirection } from './guards';
import { RescueService } from './mission-service';
import type { Direction, Mission, MissionPredicate, RewardRule } from './models';

const doubleReward: RewardRule = buildMultiplier(2);
const service = new RescueService(station.name, doubleReward, 5);

console.log(service.describe());
console.log('Station online:', station.online);
console.log('Drone:', drone.name);
console.log('Position:', drone.position.join(', '));
console.log('Service typeof:', typeof service);
console.log('Rescue service:', service instanceof RescueService);

const canFly: MissionPredicate = (mission: Mission): boolean =>
    drone.active && mission.fuelCost <= drone.fuel;

const available = selectMissions(missions, canFly);
console.log('Available:', getMissionTitles(available).join(' | '));

available.forEach((mission: Mission): void => {
    console.log(service.preview(drone, mission));
});

let total: number = 0;

for (const mission of available) {
    total += service.calculatePayout(mission);
}

console.log('Total potential payout:', total);

const crew: string[] = ['Ada'];
const updatedCrew = addToArray<string>(crew, 'Lin');

console.log('Crew:', updatedCrew.join(', '));
console.log('Original crew size:', crew.length);

const bonusMission: Mission = {
    id: 'B1',
    title: 'Find the floating sandwich',
    direction: 'West',
    difficulty: 'easy',
    fuelCost: 5,
    reward: 10
};

const expandedBoard = addToArray(missions, bonusMission);

console.log('Board sizes:', missions.length, expandedBoard.length);
console.log('Medium difficulty bonus:', difficultyBonus['medium']);

const incomingDirection: unknown = 'North';

if (isDirection(incomingDirection)) {
    const approvedDirection: Direction = incomingDirection;
    console.log('Radio direction:', approvedDirection);
} else {
    console.log('Rejected radio direction:', incomingDirection);
}
