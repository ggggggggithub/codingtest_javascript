function solution(n) {
    var answer = 0;
    let num2 = n.toString(3)
    answer += Number(num2[0])
    for(let i=1; i<num2.length; i++){
        answer += (3**(i))*Number(num2[i])
    }
    return answer;
}