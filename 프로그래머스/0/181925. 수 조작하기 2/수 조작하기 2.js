function solution(numLog) {
    var answer = '';
    for (let i=1; i<numLog.length; i++){
        let num = numLog[i-1]
        let num2 = numLog[i]
        if (num2 - num === 1){
            answer += "w"
        }
        else if (num2 - num === -1){
            answer += "s"
        }
        else if (num2 - num === 10){
            answer += "d"
        }
        else {answer += "a"}
    }
    return answer;
}