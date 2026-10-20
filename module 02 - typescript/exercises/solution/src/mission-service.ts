import type { Drone, Mission, RewardRule } from './models';

export class RescueService {
    constructor(
        public readonly stationName: string,
        private readonly rewardRule: RewardRule,
        private readonly launchFee: number
    ) {}

    public describe(): string {
        return `${this.stationName} mission planner`;
    }

    private calculateReward(mission: Mission): number {
        return this.rewardRule(mission.reward);
    }

    public calculatePayout(mission: Mission): number {
        return this.calculateReward(mission) - this.launchFee;
    }

    public preview(drone: Drone, mission: Mission): string {
        if (!drone.active) {
            throw new Error('Drone is offline');
        }

        if (mission.fuelCost > drone.fuel) {
            throw new Error('Not enough fuel');
        }

        return `${drone.name} -> ${mission.title}: ${this.calculatePayout(mission)} credits`;
    }
}
