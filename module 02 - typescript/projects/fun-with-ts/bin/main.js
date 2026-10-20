"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirection = isDirection;
exports.goSomewhere = goSomewhere;
function isDirection(value) {
    if (typeof value !== "string")
        return false;
    return ["North", "South", "East", "West"].includes(value);
}
function goSomewhere(direction) {
    if (!isDirection(direction)) {
        throw new Error("Invalid direction");
    }
    console.log(`Going ${direction}`);
}
goSomewhere("North");
