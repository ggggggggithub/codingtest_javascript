function solution(numbers, direction) {
    var answer = [];
    let len = numbers.length-1
    if (direction ==="right"){
        answer = numbers.slice(0,len)
        answer.unshift(numbers[len])
    }
    if(direction ==="left"){
        answer = numbers.slice(1,len+1)
        answer.push(numbers[0])
    }
    return answer;
}