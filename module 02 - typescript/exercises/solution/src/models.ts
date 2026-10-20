export type MissionId = string | number;
export type Direction = 'North' | 'South' | 'East' | 'West';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Drone {
    name: string;
    fuel: number;
    active: boolean;
    position: [number, number];
}

export interface Mission {
    id: MissionId;
    title: string;
    direction: Direction;
    difficulty: Difficulty;
    fuelCost: number;
    reward: number;
}

export type RewardRule = (reward: number) => number;
export type MissionPredicate = (mission: Mission) => boolean;
