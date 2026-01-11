import { Details } from "./interfaces/detail";

const obj: Details = {name:"Ima", age:29, score:90, remark:"Passed"};
let lists: number[] = [];
let num1: number = 15;
lists.push(8);
lists.push(10,3,7);
lists.push(num1);
lists.push(lists[1]+lists[0]);
lists.splice(2, 2);

let detailArr:Details[] = [];

function addRecord(name:string, age:number, score:number) {
  let record: Details = {} as Details;
  record.name = name;
  record.age = age;
  record.score = score;
  return(record);
}

detailArr.push(addRecord("IamAim", 29, 90));
detailArr.push(addRecord("Aim", 24, 87));
detailArr.push(addRecord("Cha", 32, 73));
detailArr.push(addRecord("Chacha", 25, 88));
detailArr.push(addRecord("Imaima", 27, 71));
detailArr.push(addRecord("Chari", 40, 84));



console.log(lists, "Total count of lists is", lists.length);
console.log(detailArr);