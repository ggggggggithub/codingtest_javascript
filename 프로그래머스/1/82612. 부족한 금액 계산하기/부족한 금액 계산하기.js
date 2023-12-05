function solution(price, money, count) {
    var answer = 0;
    let mon = 0;
    for(let i=1; i<=count; i++){
        mon += (i*price)
    }
    if (mon > money){
    answer = mon - money}

    return answer;
}