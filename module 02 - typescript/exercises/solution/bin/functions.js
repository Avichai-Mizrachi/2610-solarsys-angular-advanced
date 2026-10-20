"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToArray = addToArray;
exports.buildMultiplier = buildMultiplier;
exports.selectMissions = selectMissions;
exports.getMissionTitles = getMissionTitles;
function addToArray(items, newItem) {
    return [...items, newItem];
}
function buildMultiplier(factor) {
    return (reward) => reward * factor;
}
function selectMissions(items, predicate) {
    return items.filter(predicate);
}
function getMissionTitles(items) {
    return items.map((mission) => mission.title);
}
//# sourceMappingURL=functions.js.map