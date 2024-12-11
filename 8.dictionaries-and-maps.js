function processData(input) {
    //Enter your code here
    let sorts = input.split('\n');
    let splitIndex = parseInt(sorts.shift());

    let sortsObj = {};

    for (let i = 0; i < splitIndex; i++) {
        let sort = sorts[i].split(' ');
        sortsObj[sort[0]] = sort[1];
    }

    for (let j = splitIndex; j < sorts.length; j++) {
        if (!!sortsObj[sorts[j]]) {
            console.log(`${sorts[j]}=${sortsObj[sorts[j]]}`);
        } else {
            console.log('Not found');
        }
    }
}
