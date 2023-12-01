function filterAndReverse(numbers) {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);

    const reversedNumbers = oddNumbers.reverse();

    resultString = reversedNumbers.join(', ');
    return resultString;
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = filterAndReverse(numbersArray);
console.log(result);


const student = { name: "John Doe", age: 20, grades: [80, 90, 75, 85, 92], };
function calculateAverageGrade(studentObject) {
    const grades = studentObject.grades;
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;
    return `${studentObject.name}'s average grade is ${average.toFixed(2)}`;
}
const result = calculateAverageGrade(student);
console.log(result);