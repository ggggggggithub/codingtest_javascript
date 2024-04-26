function solution(bin1, bin2) {
    var answer = '';
    let num = parseInt(bin1, 2) + parseInt(bin2, 2)
    answer = num.toString(2)
    return answer;
}