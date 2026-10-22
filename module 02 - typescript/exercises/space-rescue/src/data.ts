import type { Drone, Mission } from './models';

export const drone: Drone = {
    name: 'Comet',
    fuel: 30,
    active: true,
    position: [0,0],
}

export const missions: Mission[] = [
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
        title: 'Deliver pizza to mars',
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
]

export const difficultyBonus: Record<string, number> = {
    easy: 0,
    medium: 10,
    hard: 20
};

export const station: { name: string; online: boolean } = {
    name: 'Orbit Rescue',
    online: true
};