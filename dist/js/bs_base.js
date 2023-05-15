// // let age = 18;
// // let name = 'WANG';
// // let country = 'TW';
// // console.log(`(${country}) ${name} ${age} `)

// // let students = [1, 2, 3, 4]
// // console.log(students);

// // students.push(5);
// // console.log(students);

// // console.log(students[0]);
// // console.log(students.join('::'));

// // let index = students.indexOf(1);
// // console.log(index);

// // students.splice(index, 2);
// // console.log(students);

// // let nums = [40, 50, 80, 75];

// // console.log('調整前');
// // nums.forEach((nnn, index) => {
// //     console.log(`第 ${index + 1} 位學生: ${nnn}`);
// //     nums[index] = nnn + 20;
// // })

// // console.log('調整後');
// // nums.forEach((nnn, index) => {
// //     console.log(`第 ${index + 1} 位學生: ${nnn}`);
// // });

// // let students100 = [];
// // for (let sindex = 0; sindex < 100; sindex++) {
// //     students100[sindex] = Math.ceil(Math.random() * 100);

// // }
// // console.table(students100);


// //  const a1 = function () {
// //      console.log('Origin function');
// //  }

// // const a2 = () => {
// //      console.log('Arror function');
// //  }

// // const addnum = (orig, add) => {
// //     orig = +originNum;
// //     add = +addNum;
   
// //     let total = orig + add;
   
// //     console.log(`In function: ${total}`);
// //     return total;
// // }

// let nums = [1];
// nums.forEach((number, index) => {
//     let even = [1, 2, 3, 4]
//     console.log(`${number} * ${} = ${number * number}`);
// // console.log(` ${number } * ${value+1}=${number*number}`)
// });


// const addNum = (originNum, addNum) => {
//     // let originNum = 40;
//     // let addNum = 20;
//     originNum = +originNum;
//     addNum = +addNum;
//     // 判斷是否真的是數字
//     let total = originNum + addNum;
//     // 判斷是否超過一百分
//     // console.log(`In function: ${total}`);
//     return total;
// }

// let students = [];
// students.push({
//     name: 'David',
//     num: 40
// });

// students.push({
//     name: 'John',
//     num: 50
// });

// students.push({
//     name: 'Helen',
//     num: 80
// });

// students.push({
//     name: 'Mary',
//     num: 20
// });

// let add = 30;
// students.forEach((student, index) => {
//     console.log(`Student ${student.name}: ${student.num}`);
//     student.num = addNum(student.num, add);
//     students[index] = student;
// })

// console.table(students);
for (let start = 1; start <= 9; start++) {
    for (let end = 1; end <= 9; end++) {
        console.log(`${start} * ${end} = ${start * end}`)
    }
}

