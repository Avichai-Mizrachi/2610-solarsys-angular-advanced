import type { Mission, MissionPredicate, RewardRule } from "./models";

export function addToArray<T>(items: T[], newItem: T): T[] {
    return [...items,newItem];
}

export function buildMultiplier(factor: number): RewardRule {
    return (reward: number): number => reward * factor;
}

export function selectMissions(
    items: Mission[],
    predicate: MissionPredicate
): Mission[] {
    return items.filter(predicate);
}

export function getMissionTitles(items: Mission[]): string[] {
    return items.map((mission: Mission): string => mission.title);
}

