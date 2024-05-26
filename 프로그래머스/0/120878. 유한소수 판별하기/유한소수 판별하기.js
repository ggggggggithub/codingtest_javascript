function solution(a, b) {
    var answer = 0;
    answer = Number((a/b).toFixed(10)) == a/b ? 1 : 2
    return answer;
}