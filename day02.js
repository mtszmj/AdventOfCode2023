"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.part2LineValue = exports.part2 = exports.part1LineValue = exports.part1 = void 0;
function part1(lines) {
    return lines.map(part1LineValue).reduce(function (acc, curr) { return acc + curr; }, 0);
}
exports.part1 = part1;
function part1LineValue(line) {
    var _a;
    var maxValues = new Map();
    maxValues.set('red', 12);
    maxValues.set('green', 13);
    maxValues.set('blue', 14);
    var gameValues = line.split(':');
    var regex = 'Game (?<gameNumber>\\d+)';
    var matches = gameValues[0].match(regex);
    var gameNumber = Number((_a = matches === null || matches === void 0 ? void 0 : matches.groups) === null || _a === void 0 ? void 0 : _a.gameNumber);
    // console.log(gameValues[1]);
    var colorValues = gameValues[1].split(new RegExp('[,;]'));
    var valueColorRegex = new RegExp('(?<value>\\d+) (?<color>\\w+)');
    var isOverMax = false;
    colorValues.forEach(function (entry) {
        var _a, _b;
        var match = entry.match(valueColorRegex);
        // console.log(match?.groups?.value + ': ' + match?.groups?.color);
        var value = Number((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.value);
        var max = maxValues.get((_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.color);
        // console.log(match?.groups?.value + ': ' + match?.groups?.color + ' (max: '+ max +')');
        if (max < value) {
            isOverMax = true;
        }
    });
    // console.log(test);
    // console.log(test.length);
    return isOverMax ? 0 : gameNumber;
}
exports.part1LineValue = part1LineValue;
function part2(lines) {
    return lines.map(part2LineValue).reduce(function (acc, curr) { return acc + curr; }, 0);
}
exports.part2 = part2;
function part2LineValue(line) {
    var _a;
    var maxValues = new Map();
    maxValues.set('red', 0);
    maxValues.set('green', 0);
    maxValues.set('blue', 0);
    var gameValues = line.split(':');
    var regex = 'Game (?<gameNumber>\\d+)';
    var matches = gameValues[0].match(regex);
    var gameNumber = Number((_a = matches === null || matches === void 0 ? void 0 : matches.groups) === null || _a === void 0 ? void 0 : _a.gameNumber);
    // console.log(gameValues[1]);
    var colorValues = gameValues[1].split(new RegExp('[,;]'));
    var valueColorRegex = new RegExp('(?<value>\\d+) (?<color>\\w+)');
    var isOverMax = false;
    colorValues.forEach(function (entry) {
        var _a, _b, _c;
        var match = entry.match(valueColorRegex);
        // console.log(match?.groups?.value + ': ' + match?.groups?.color);
        var value = Number((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.value);
        var max = maxValues.get((_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.color);
        // console.log(match?.groups?.value + ': ' + match?.groups?.color + ' (max: '+ max +')');
        if (max < value) {
            maxValues.set((_c = match === null || match === void 0 ? void 0 : match.groups) === null || _c === void 0 ? void 0 : _c.color, value);
        }
    });
    // console.log(test);
    // console.log(test.length);
    return Array.from(maxValues.values()).reduce(function (acc, curr) { return acc * curr; }, 1);
}
exports.part2LineValue = part2LineValue;
