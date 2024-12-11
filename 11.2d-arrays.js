function main() {
    let arr = Array(6);
    let max = -Infinity;

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine()
            .replace(/\s+$/g, '')
            .split(' ')
            .map((arrTemp) => parseInt(arrTemp, 10));
    }

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[0].length - 2; j++) {
            let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            let middle = arr[i + 1][j + 1];
            let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            let sum = top + middle + bottom;
            max = Math.max(max, sum);
        }
    }

    console.log(max);
}
