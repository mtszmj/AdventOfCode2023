import { map } from "lodash";

export function part1(lines: string[]): number {
    return lines.map(part1LineValue).reduce((acc, curr) => acc + curr, 0);  
}

export function part1LineValue(line: string): number {
    const maxValues = new Map<string, number>();
    maxValues.set('red', 12);
    maxValues.set('green', 13);
    maxValues.set('blue', 14);

    var gameValues = line.split(':');
    var regex = 'Game (?<gameNumber>\\d+)';
    var matches = gameValues[0].match(regex);
    const gameNumber = Number(matches?.groups?.gameNumber);

    // console.log(gameValues[1]);

    const colorValues = gameValues[1].split(new RegExp('[,;]'));
    const valueColorRegex = new RegExp('(?<value>\\d+) (?<color>\\w+)');
    let isOverMax = false;
    colorValues.forEach(entry => {
        const match = entry.match(valueColorRegex);
        // console.log(match?.groups?.value + ': ' + match?.groups?.color);
        const value = Number(match?.groups?.value);
        const max = maxValues.get(match?.groups?.color!)!;
        // console.log(match?.groups?.value + ': ' + match?.groups?.color + ' (max: '+ max +')');
        if(max < value){
            isOverMax = true;
        }
    })
    // console.log(test);
    // console.log(test.length);

    return isOverMax ? 0 : gameNumber;
}

export function part2(lines: string[]): number {
    return lines.map(part2LineValue).reduce((acc, curr) => acc + curr, 0);
}

export function part2LineValue(line: string): number {
    const maxValues = new Map<string, number>();
    maxValues.set('red', 0);
    maxValues.set('green', 0);
    maxValues.set('blue', 0);

    var gameValues = line.split(':');
    var regex = 'Game (?<gameNumber>\\d+)';
    var matches = gameValues[0].match(regex);
    const gameNumber = Number(matches?.groups?.gameNumber);

    // console.log(gameValues[1]);

    const colorValues = gameValues[1].split(new RegExp('[,;]'));
    const valueColorRegex = new RegExp('(?<value>\\d+) (?<color>\\w+)');
    let isOverMax = false;
    colorValues.forEach(entry => {
        const match = entry.match(valueColorRegex);
        // console.log(match?.groups?.value + ': ' + match?.groups?.color);
        const value = Number(match?.groups?.value);
        const max = maxValues.get(match?.groups?.color!)!;
        // console.log(match?.groups?.value + ': ' + match?.groups?.color + ' (max: '+ max +')');
        if(max < value){
            maxValues.set(match?.groups?.color!, value);
        }
    })
    // console.log(test);
    // console.log(test.length);

    return Array.from(maxValues.values()).reduce((acc, curr) => acc * curr, 1);
}