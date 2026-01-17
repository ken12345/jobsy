let arr: number[] = [];
arr.push(10)
const num: number = 26;
arr.push(num);
arr.push(arr[0] + arr[1]);
arr.splice(2,0,57);
arr.push(arr[2] - arr[3]);
arr.pop();
arr.shift();
arr.unshift(46)

import {IStudent} from "./student.interface"
let studentArr: IStudent[] = [];

function addStudent (student:IStudent){
    studentArr.push(student);
};

addStudent({
    id: 0,
    name:"Koizz Gacilo",
    course: "IT",
    totalGrade: 85
});

const nameArr: string[] = [
    "John",
    "Karen",
    "Jane",
    "Mark"
];

const courseArr: string[] = [
    "BA",
    "Criminology",
    "Secretarial",
    "Law"
];

for (let i = 0; i < nameArr.length; i++) {
    let student: IStudent = {} as IStudent;


}
































//output for arr
console.log("arr:", arr, arr.length)
//output for studentArr
console.log("studentArr:", studentArr)