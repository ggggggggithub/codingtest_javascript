function solution(x, n) {
    var answer = [];
    if (x===0){
        let zero = new Array(n).fill(0)
        return zero
    }
    let a = x
    while (x !== a*n+a){
        answer.push(x)
        x += a
    }
    return answer;
}