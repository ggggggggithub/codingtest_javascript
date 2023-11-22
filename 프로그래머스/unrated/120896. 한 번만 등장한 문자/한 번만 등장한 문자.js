function solution(s) {
    var answer = '';
    let ans = [];
    let sArr = s.split("");
    sArr.forEach((item) => {
    if(s.indexOf(item) === s.lastIndexOf(item)){
        ans.push(item);
    }
 })
    answer = ans.sort().join("");
    return answer;
}