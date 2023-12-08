function solution(s) {
    var answer = 0;
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",]
    num.forEach((i,idx)=>s=s.replaceAll(i,idx))
    answer = Number(s)
    return answer;
}