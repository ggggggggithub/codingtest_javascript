function solution(n) {
    var answer = 0;
    let arr = String(n).split("").sort((a,b)=>(b-a)).join("")
    answer = Number(arr)
    return answer;
}