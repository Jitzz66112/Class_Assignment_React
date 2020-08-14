//Very Easy


//Q-1


function convert(min) {
    var sec = min * 60;
    return sec;

}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));
// Output: 300 
// Output: 180
// Output: 120

//Q-2

function test(a, b) {
    if (a % b == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(test(98, 7));
console.log(test(85, 4));
//Output: true
//Output: false

//*************************************************************************************************************

//Easy

//Q-1


function count(word, str) {
    var count = 0;

    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == word) {
            count += 1;
        }
    }
    return count;
}
console.log(count("a", "edabit"));
console.log(count("c", "Chamber of secrets"));
console.log(count("b", "big fat bubble"));
//Output: 1
//Output: 1
//Output: 4


//Q-2

function add(n) {
    var tot = 0;
    if (n <= 1000 && n >= 1) {
        for (var i = 1; i <= n; i++) {
            tot += i;
        }
        return tot;
    }
}
console.log(add(4));
console.log(add(13));
console.log(add(600));
//Output: 10
//Output: 91
//Output: 180300



//Q-3

function replace(str) {
    for (var pos = 0; pos < str.length; pos++) {
        if (str.charAt(pos) == 'a') {
            str = str.substring(0, pos) + '1' + str.substring(pos + 1);

        }

        if (str.charAt(pos) == 'e') {
            str = str.substring(0, pos) + '2' + str.substring(pos + 1);

        }
        if (str.charAt(pos) == 'i') {
            str = str.substring(0, pos) + '3' + str.substring(pos + 1);

        }
        if (str.charAt(pos) == '0') {
            str = str.substring(0, pos) + '4' + str.substring(pos + 1);

        }
        if (str.charAt(pos) == 'u') {
            str = str.substring(0, pos) + '5' + str.substring(pos + 1);

        }
    }
    return str;
}
console.log(replace('karachi'));
console.log(replace('chembur'));
console.log(replace('khandbari'));
//Output: k1r1ch3
//Output: ch2mb5r
//Output: kh1ndb1ri