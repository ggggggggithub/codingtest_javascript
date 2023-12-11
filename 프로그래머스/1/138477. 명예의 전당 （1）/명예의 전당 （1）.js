function solution(k, score) {
    var answer = [];
    let glory = [];
    for (let i=0; i<score.length; i++){
        if (glory.length < k){
            glory.push(score[i])
        }
        else if (glory.length >= k){
            if (glory[0] < score[i]){
                glory.shift()
                glory.push(score[i])
            }
        }
        glory.sort((a,b) => (a-b))
        answer.push(glory[0])
    }
    return answer;
}