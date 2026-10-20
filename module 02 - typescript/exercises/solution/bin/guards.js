"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirection = isDirection;
function isDirection(value) {
    return typeof value === 'string' && (value === 'North' ||
        value === 'South' ||
        value === 'East' ||
        value === 'West');
}
//# sourceMappingURL=guards.js.map