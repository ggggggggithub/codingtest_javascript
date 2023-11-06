function solution(x1, x2, x3, x4) {
    var answer = true;
    answer = false;
    let a = false;
    let b = false;
    if (x1 === true || x2 === true){
        a = true
    }
    if (x3 === true || x4 === true){
        b = true
    }
    if (a === true && b === true){
        answer = true
    }
    return answer;
}