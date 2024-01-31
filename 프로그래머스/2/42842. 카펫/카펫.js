function solution(brown, yellow) {
    var answer = [];
    let carpet = brown+yellow
    let yell = [];
    for(let i=0; i<=yellow; i++){
        if (yellow%i ===0){
            yell.push(i)
        }
    }
    let hei = 0;
    let wei = 0;
    let a = 0;
    let b = yell.length-1;
    while ((wei*hei) !== carpet){
        hei = yell[a]+2
        wei = yell[b]+2
        a++
        b--
    }
    answer = [wei,hei]
    return answer;
}