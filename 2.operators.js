function main() {
    var i = 4;
    var d = 4.0;
    var s = 'HackerRank ';
    // Declare second integer, double, and String variables.
    let _i = 12;
    let _d = 4.0;
    let _s = 'is the best place to learn and practice coding!';

    // Read and save an integer, double, and String to your variables.
    _i = parseInt(readLine());
    _d = parseFloat(readLine());
    _s = readLine();

    // Print the sum of both integer variables on a new line.
    console.log(i + _i);

    // Print the sum of the double variables on a new line.
    console.log((d + _d).toFixed(1));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + _s);
}
