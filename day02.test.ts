import {describe, expect, test} from '@jest/globals';
import {part1, part2, part1LineValue, part2LineValue} from './day02';
import * as fs from 'fs';

const example = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const exampleLines = example.split(/\r?\n/);
var allFileContents = fs.readFileSync('Data/day02.txt', 'utf-8');
var inputLines = allFileContents.split(/\r?\n/);

// part 1

test('day 02 part 1 value line 1', () => {
    expect(part1LineValue('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')).toBe(1);
});

test('day 02 part 1 value line 2', () => {
    expect(part1LineValue('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(2);
});

test('day 02 part 1 value line 0', () => {
    expect(part1LineValue('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')).toBe(0);
});

test('day 02 part 1 value line 0', () => {
    expect(part1LineValue('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red')).toBe(0);
});

test('day 02 part 1 value line 5', () => {
    expect(part1LineValue('Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')).toBe(5);
});

test('day 02 part 1 example is 8', () => {
    expect(part1(exampleLines)).toBe(8);
});

test('day 02 part 1 input is 2541', () => {
    expect(part1(inputLines)).toBe(2541);
});

// part 2

test('day 02 part 2 value line 1', () => {
    expect(part2LineValue('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')).toBe(48);
});

test('day 02 part 2 value line 2', () => {
    expect(part2LineValue('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(12);
});

test('day 02 part 2 value line 0', () => {
    expect(part2LineValue('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')).toBe(1560);
});

test('day 02 part 2 value line 0', () => {
    expect(part2LineValue('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red')).toBe(630);
});

test('day 02 part 2 value line 5', () => {
    expect(part2LineValue('Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')).toBe(36);
});

test('day 02 part 2 example is 2286', () => {
    expect(part2(exampleLines)).toBe(2286);
});

test('day 02 part 2 equal to 2', () => {
    expect(part2(inputLines)).toBe(66016);
});