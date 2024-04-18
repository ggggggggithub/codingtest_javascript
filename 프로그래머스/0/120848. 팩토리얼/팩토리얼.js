function solution(n) {
    var answer = 0;
    let num = 1;
    let num2 = 1;
    while(num<=n){
        num = num * num2
        num2++
    }
    answer = num2-2
    return answer;
}