function solution(array) {
    var answer = 0;
    let num = array.sort(function (a, b) {
  return a - b;
});
    let middle = Math.floor(array.length/2)
    answer = array[middle]
    return answer;
}