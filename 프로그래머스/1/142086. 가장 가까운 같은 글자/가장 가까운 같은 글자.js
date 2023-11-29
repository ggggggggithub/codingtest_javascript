function solution(s) {
    var answer = [];
    for(let i=0; i<s.length; i++){
        let number = -1
        for (let j=0; j<i; j++){
            if (s[i] === s[j]){
                number = i-j
            }
        }
        answer.push(number)
    }
    return answer;
}