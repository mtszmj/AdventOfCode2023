import {describe, expect, test} from '@jest/globals';
import {part1, part2} from './day01';
import * as fs from 'fs';

var allFileContents = fs.readFileSync('Data/day01.txt', 'utf-8');
var lines = allFileContents.split(/\r?\n/);

test('day 01 part 1 equal to 54605', () => {
    expect(part1(lines)).toBe(54605);
});

test('day 01 part 2 equal to 55429', () => {
    expect(part2(lines)).toBe(55429);
});