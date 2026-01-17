import { IStudent } from './student.interface';

let arr: number[] = [];

arr.push(10);
const num: number = 26;
arr.push(num);
arr.push(arr[0] + arr[1])
arr.splice(2, 0, 57);
arr.push(arr[2] - arr[3]);
arr.pop();
arr.shift();
arr.unshift(46);

let studentArr: IStudent[] = []; 

let nameArrr: string[] = ["John", "Karen", "Jane", "Mark"];
let courseArrr: string[] = ["BA", "Criminology", "Secretarial", "Law"];
const addStudent = (student: IStudent): void => {
    studentArr.push(student);
}

addStudent({ id: 0, name: "Novs", course: "IT", totalGrade: 85 });



for (let i = 0; i < nameArrr.length; i++) {
    const student: IStudent = {
        id: studentArr.length + 1,
        name: nameArrr[i],
        course: courseArrr[i],
        totalGrade: arr[i],
        remarks: arr[i] <= 35 ? "FAILED" : "PASSED"
    };

  addStudent(student);
}



















// //output for arr
console.log("arr:", arr, arr.length);
// //output for studentArr
console.log("studentArr:", studentArr);