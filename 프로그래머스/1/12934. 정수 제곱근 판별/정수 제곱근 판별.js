function solution(n) {
    var answer = 0;
    let num = Math.sqrt(n)
    let num2 = Number.isInteger(num)
    if (num2){answer = (num+1)**2}
    else {answer = -1}
    return answer;
}