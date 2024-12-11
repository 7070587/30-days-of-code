function main() {
    // Enter your code here
    let data = inputLines[1]
        .split(' ')
        .map((x) => +x)
        .sort((a, b) => a - b);
    console.log(Math.abs(data[0] - data[data.length - 1]));
}
