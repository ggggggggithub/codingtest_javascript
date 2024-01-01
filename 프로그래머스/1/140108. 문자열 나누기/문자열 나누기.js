function solution(s) {
    var answer = 0;
    let word = s[0];
    let count = 1;
    let count2 = 0;
    for(let i=1; i<s.length; i++){
        if (count === count2){
            word = s[i]
            answer++
            count = 1;
            count2 = 0;
            continue;
        }
        if (word === s[i]){
            count++
        }
        if (word !== s[i]){
            count2++
        }
    }
    answer++
    return answer;
}