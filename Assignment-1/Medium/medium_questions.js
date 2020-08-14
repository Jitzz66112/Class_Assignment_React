//Medium

//Q-1


function rev(str, letter) {
    var arr = str.split(" ");


    arr.forEach(function(element, index) {
        if (element.startsWith(letter)) {
            arr[index] = element.split("").reverse().join("");

        }
    });

    var res = arr.join(" ");
    return res;

}
console.log(rev("first man to walk on the moon", "m"));
// Output: first nam to walk on the noom
console.log(rev("word searches are super fun", "s"));
//Output: word sehcraes are repus fun
console.log(rev("peter piper picked pickled peppers", "p"));
//Output: retep repip dekcip delkcip sreppep


//Q-2

function find(arr) {
    if (arr.every(v => v === arr[0])) {
        return true;
    } else {
        return false;
    }
}
var ele = ['@', '@', '@']
console.log(find(ele));
var elesecond = ['$', '$$', '$$$']
console.log(find(elesecond));
var elethird = ['SS', 'SS', 'Ss']
console.log(find(elethird));
var elefourth = ["abc", "abc", "abc", "abc"]
console.log(find(elefourth));
// Output: true
// Output: false
// Output: false
// Output: false



//Q-3

function dupli(arrays) {
    return arrays.filter((a, b) => arrays.indexOf(a) === b).join(" ")

}
console.log(dupli(ele))
var x = [1, 0, 1, 0]
console.log(dupli(x))
    // Output: 1 0