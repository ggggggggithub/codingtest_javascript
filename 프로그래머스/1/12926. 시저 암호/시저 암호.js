function solution(s, n) {
    var answer = '';
    let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let small = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<s.length; i++){
        if (s[i] === " "){
            answer += s[i]
        }
        else if (big.includes(s[i])){
            let num = big.indexOf(s[i]) + n
            answer += big[num]
        }
        else if (small.includes(s[i])){
            let num = small.indexOf(s[i]) + n
            answer += small[num]
        }
    }
    return answer;
}