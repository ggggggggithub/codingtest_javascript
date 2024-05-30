function solution(sides) {
    var answer = 0;
    sides.sort((a,b)=>(b-a))
    let sum = sides[0]+sides[1]
    let minus = sides[0] - sides[1] +1
    for(let i=sides[0]+1; i<sum; i++){
        answer++
    }
    for(let j=minus; j<=sides[0]; j++){
        answer++
    }
    
    return answer;
}