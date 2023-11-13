function solution(myString, pat) {
    var answer = '';
    a = myString.lastIndexOf(pat)
    answer = myString.slice(0,(a + pat.length))
    return answer;
}