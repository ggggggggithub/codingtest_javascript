function solution(x) {
    var answer = true;
    let num = 0;
    let str = String(x)
    for (let i=0; i<str.length; i++){
        num += Number(str[i])
    }
    if (x % num !==0){answer = false}
    return answer;
}