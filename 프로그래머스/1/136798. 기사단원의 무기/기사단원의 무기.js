function solution(number, limit, power) {
    var answer = 1;
    let num = 1;
    for(let i=2; i<=number; i++){
        for(let j=1; j<=(i/2); j++){
      if (i % j === 0) {
         num ++}
    }
        if (num <= limit){
            answer += num;
            num = 1;
        }
        if (num > limit){
            answer += power;
            num = 1;
        }
    }
    return answer;
}