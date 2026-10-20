export type Direction = "North" | "South" | "East" | "West";

export function isDirection(value: unknown): value is Direction {
    if (typeof value !== "string") return false;
    return ["North", "South", "East", "West"].includes(value);
}

export function goSomewhere(direction: unknown)  {
    if (!isDirection(direction)) {
        throw new Error("Invalid direction");
    }
    console.log(`Going ${direction}`);
}


goSomewhere("North");