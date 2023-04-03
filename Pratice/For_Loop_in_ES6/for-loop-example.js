function geeks() {
    let obj = {
        name: 'Peter',
        age: 25,
        salary:3000
    }
    console.log("for(;;)")  // for thường: Thực thi khối lệnh 1 số lần xác định với 1 đk kết thúc lặp
    for (let i = 0; i <= 10; i += 2) {
        console.log(i + " ")
    }
    console.log("for...of") // for...of: Thực thi khối lệnh duyệt qua các thuộc tính của đối tượng/đối tượng trong mảng
    for (let i of ['Ha Noi', 20.32,3000]) {
        console.log(i + " ")
    }
    console.log("for...in") // for...in: Thực thi khối lệnh để lặp lại các đối tượng trong mảng, chuỗi
    for (let i in obj) {
        console.log(obj[i] + " ");
    }
}
geeks();
