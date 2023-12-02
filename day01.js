"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.part2 = exports.part1 = void 0;
var performance = require('perf_hooks').performance;
var calibrationValue = function (line) {
    var first = -1;
    var last = -1;
    for (var index = 0; index < line.length; index++) {
        if (!isNaN(Number(line[index])) && first === -1) {
            first = Number(line[index]);
        }
        if (!isNaN(Number(line[line.length - 1 - index])) && last === -1) {
            last = Number(line[line.length - 1 - index]);
        }
        if (first > -1 && last > -1) {
            return first * 10 + last;
        }
    }
    return NaN;
};
function part1(lines) {
    var sum = 0;
    lines.forEach(function (line) {
        sum += calibrationValue(line);
    });
    return sum;
}
exports.part1 = part1;
;
function part2(lines) {
    var nums = new Map();
    nums.set('one', 'one1one');
    nums.set('two', 'two2two');
    nums.set('three', 'three3three');
    nums.set('four', 'four4four');
    nums.set('five', 'five5five');
    nums.set('six', 'six6six');
    nums.set('seven', 'seven7seven');
    nums.set('eight', 'eight8eight');
    nums.set('nine', 'nine9nine');
    var sum = 0;
    var keys = Array.from(nums.keys());
    lines.forEach(function (line) {
        keys.forEach(function (key) {
            line = line.replace(new RegExp(key, 'g'), nums.get(key));
        });
        sum += calibrationValue(line);
    });
    return sum;
}
exports.part2 = part2;
;
// const part2singleLine = function (line: string): number {
//   type Dictionary = { [key: string]: string };
//   let nums: Map<string, string> = new Map<string, string>();
//   nums.set('one', 'one1one');
//   nums.set('two', 'two2two');
//   nums.set('three', 'three3three');
//   nums.set('four', 'four4four');
//   nums.set('five', 'five5five');
//   nums.set('six', 'six6six');
//   nums.set('seven', 'seven7seven');
//   nums.set('eight', 'eight8eight');
//   nums.set('nine', 'nine9nine');
//   Array.from(nums.keys()).forEach((key) => {
//     let mapValue: string = nums.get(key)!;
//     line = line.replace(new RegExp(key, 'g'), mapValue);
//   });
//   let value = calibrationValue(line);
//   return value;
// };
// const allFileContents = fs.readFileSync('Data/day01.txt', 'utf-8');
// const lines = allFileContents.split(/\r?\n/);
// let startTime = performance.now();
// let result = part1(lines);
// console.log(result);
// let perf = performance.now() - startTime;
// console.log('part 1: ' + perf);
// let used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// startTime = performance.now();
// result = part2(lines);
// console.log(result);
// perf = performance.now() - startTime;
// console.log('part 2: ' + perf);
// used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// //54605
