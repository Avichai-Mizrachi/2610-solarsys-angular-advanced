import type { Direction } from "./models"; 

export function isDirection(value: unknown): value is Direction {
    return typeof value === 'string' && (
        value === 'North' ||
        value === 'South' ||
        value === 'West' ||
        value === 'East'
    );
}