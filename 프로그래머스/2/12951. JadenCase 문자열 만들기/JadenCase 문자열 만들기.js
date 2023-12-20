function solution(s) {
    var answer = '';
    lows = s.toLowerCase() 
    for(let i=0; i<lows.length; i++){
        if ((lows[i] !== ' ' && lows[i-1] === ' ')|| i===0){
            answer += lows[i].toUpperCase()
        }
 
            else {answer += lows[i]}
    }

    return answer;
}