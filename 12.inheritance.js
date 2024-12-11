class Student extends Person {
    /*
     *   Class Constructor
     *
     *   @param firstName - A string denoting the Person's first name.
     *   @param lastName - A string denoting the Person's last name.
     *   @param id - An integer denoting the Person's ID number.
     *   @param scores - An array of integers denoting the Person's test scores.
     */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }

    /*
     *   Method Name: calculate
     *   @return A character denoting the grade.
     */
    // Write your method here
    calculate() {
        let grade = '';
        let aver = this.scores.reduce((a, b) => a + b) / this.scores.length;

        if (aver >= 90 && aver <= 100) {
            grade = 'O';
        } else if (aver >= 80 && aver < 90) {
            grade = 'E';
        } else if (aver >= 70 && aver < 80) {
            grade = 'A';
        } else if (aver >= 55 && aver < 70) {
            grade = 'P';
        } else if (aver >= 40 && aver < 55) {
            grade = 'D';
        } else if (aver < 40) {
            grade = 'T';
        }

        return grade;
    }
}
