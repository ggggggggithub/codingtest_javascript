function solution(s) {
    var answer = '';
    let arr = s.split(" ").sort((a,b)=> (a-b))
    answer += arr[0]
    answer += " "
    answer += arr[arr.length-1]
    return answer;
}