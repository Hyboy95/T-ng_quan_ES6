let arr = [1,2,3,4,5,6,7];
let square = (item) => item * item;
function arraySq(func, arr) {
    let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     newArr.push(func(arr[i]));
    // }
    arr.forEach((e) => {
        newArr.push(func(e));
    });
    return newArr;
}

console.log(arraySq(square,arr));