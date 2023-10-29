function solution(arr) {
    var answer = [];
    let first= arr.indexOf(2)
    let last = arr.lastIndexOf(2)
    answer = arr.slice(first,last+1)
        if (first === -1){
        answer.push(first)
    }
    return answer;
}