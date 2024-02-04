function solution(n, t, m, p) {
    var answer = '';
    let str = '';
    let num = 0;
    while (str.length < 100000){
        str += num.toString(n)
        num++
    }
    while (answer.length !== t){
        answer += str[p-1].toUpperCase()
        p += m
    }
    
    return answer
    ;
}