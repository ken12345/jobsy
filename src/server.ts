let arr: number[] = [];
arr.push(10);
let num: number = 26;
arr.push(num);
arr.push(arr[0] + arr[1]);
arr.splice(2, 0, 57);
arr.push(arr[2] - arr[3]);
arr.splice(4, 1);
arr.splice(0, 1);
arr.splice(0, 0, 46)




















































console.log("output here:", arr, arr.length)