function solution(n) {
    var answer = 0;
    answer = n
    for(let i=1; i<n; i++){
        if (n%i === 1 && i<answer){
            answer = i
        }
    }
    return answer;
}