function solution(numbers, n) {
    var answer = 0;
    let a = 0;
    while (answer<=n){
        answer += numbers[a]
        a++
    }
    return answer;
}