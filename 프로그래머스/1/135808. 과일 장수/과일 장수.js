function solution(k, m, score) {
    var answer = 0;
    let box = score.sort((a, b) => b-a)
    let min = Math.floor(score.length / m)
    for(let i=1; i<=min; i++){
        answer += box[m*i-1] * m;
    }
    return answer;
}