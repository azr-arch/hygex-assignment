/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */

/**
 * src: "https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range"
 */

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function addLeadingZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}
