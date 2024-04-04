function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i=0; i<intStrs.length; i++){
        let num = Number(intStrs[i].slice(s,s+l))
        if (k < num){
        answer.push(num)}
    }
    return answer;
}