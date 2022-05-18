function f1 () {
    var v1 = f2(10) + f2([10, 20, 30, 40, 50]) + f2([]) + f3(10, 3);
    console.log(v1);
}

function f2(num) {
    if (Array.isArray(num)) {
        let res = 0;
        for (let i=0; i < num.length; i++) {
            res += num[i];
            // res = res + num[i];
        }
        return res * 2;
    }
    else {
        return num * 2;
    }
}

function f3(num, num2) {
    return num * num2;
}


f1();