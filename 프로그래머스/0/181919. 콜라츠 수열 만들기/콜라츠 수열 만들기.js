function solution(n) {
    var answer = [];
    answer.push(n)
    while (answer[answer.length-1] !== 1){
        let a = answer[answer.length-1]
        if (a%2===0){
            answer.push(a/2)
        }
        else {answer.push((a*3)+1)}

        }
    return answer;
}