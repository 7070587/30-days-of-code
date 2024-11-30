function processData(input) {
    //Enter your code here
    let splits = input.split('\n');
    splits.shift(0);

    for (let i = 0; i < splits.length; i++) {
        let evenString = '';
        let oddString = '';

        for (let j = 0; j < splits[i].length; j++) {
            if (j % 2 === 0) {
                evenString += splits[i][j];
            } else {
                oddString += splits[i][j];
            }
        }

        splits[i] = `${evenString} ${oddString}`;

        console.log(splits[i]);
    }
}
