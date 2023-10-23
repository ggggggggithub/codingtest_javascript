function solution(a, b) {
    var answer = 0;
    let suma = String(a) + String(b)
    let sumb = String(b) + String(a)
    if (Number(suma) >= Number(sumb)){
        answer = Number(suma)
    }
    else {answer = Number(sumb)}
    return answer;
}