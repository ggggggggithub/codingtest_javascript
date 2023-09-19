function solution(sides) {
    var answer = 0;
    let long = 0;
    let sum = 0
    for(let i=0; i<sides.length; i++){
        sum = sum += sides[i]
        if (long < sides[i]){
            long = sides[i]
        }
    }
    if(sum > (long*2)){
        answer = 1
    }
    else{answer=2}
    
    return answer;
}