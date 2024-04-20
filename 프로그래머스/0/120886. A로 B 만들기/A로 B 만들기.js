function solution(before, after) {
    var answer = 0;
    let str = before.split("").sort().join("")
    let str2 = after.split("").sort().join("")
    if (str === str2){answer = 1}
    return answer;
}