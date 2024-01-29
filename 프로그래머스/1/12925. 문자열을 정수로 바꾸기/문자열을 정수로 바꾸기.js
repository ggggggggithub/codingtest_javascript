function solution(s) {
    var answer = 0;
    if (s[0] === "-"){
        answer = Number(s.slice(0,s.length))
    }
    else { answer = Number(s)}
    return answer;
}