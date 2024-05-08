function solution(numbers, k) {
    var answer = 0;
    let num = (k*2-1)%(numbers.length)-1   
    answer = numbers[num]
    if (num === -1){return numbers[numbers.length-1]}
    return answer;
}