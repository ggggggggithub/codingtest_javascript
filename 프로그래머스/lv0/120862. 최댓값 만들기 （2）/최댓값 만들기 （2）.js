function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort(function (a, b) {
  return a - b;
}); 
    let num = arr.length-1
    if((arr[0]*arr[1]) > (arr[num] *arr[num-1])){
        answer = arr[0]*arr[1]
    }
    else {answer = arr[num]*arr[num-1] }
    return answer
}