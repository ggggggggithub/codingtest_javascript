function solution(balls, share) {
    var answer = 0;
    let a = 1;
    let b = 1;
    let c = 1;
    for(let i=1; i<=balls; i++){
        a *= i
    }
    for (let j=1; j<=(balls-share); j++){
        b *= j
    }
    for (let k=1; k<=share; k++){
        c *= k
    }
    if(b){answer = Math.round(a/(b*c))}
    else {answer = a/c}
    return answer;
}