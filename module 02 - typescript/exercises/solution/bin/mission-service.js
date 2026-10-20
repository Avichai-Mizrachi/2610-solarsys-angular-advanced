"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RescueService = void 0;
class RescueService {
    constructor(stationName, rewardRule, launchFee) {
        this.stationName = stationName;
        this.rewardRule = rewardRule;
        this.launchFee = launchFee;
    }
    describe() {
        return `${this.stationName} mission planner`;
    }
    calculateReward(mission) {
        return this.rewardRule(mission.reward);
    }
    calculatePayout(mission) {
        return this.calculateReward(mission) - this.launchFee;
    }
    preview(drone, mission) {
        if (!drone.active) {
            throw new Error('Drone is offline');
        }
        if (mission.fuelCost > drone.fuel) {
            throw new Error('Not enough fuel');
        }
        return `${drone.name} -> ${mission.title}: ${this.calculatePayout(mission)} credits`;
    }
}
exports.RescueService = RescueService;
//# sourceMappingURL=mission-service.js.map