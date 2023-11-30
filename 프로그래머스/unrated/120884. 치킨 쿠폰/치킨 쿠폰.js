function solution(chicken) {
    var answer = 0;
    let number = chicken;
    while(number > 9) {
        answer += Math.floor(number / 10);
        number = Math.floor((number / 10) + ( number % 10));
    }

    return answer;
}