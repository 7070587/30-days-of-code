function main() {
    const n = parseInt(readLine().trim(), 10).toString(2);

    let max = 1;
    let result = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] === n[i + 1]) {
            max++;
        } else {
            max = 1;
        }

        result = Math.max(result, max);
    }

    console.log(result);
}
