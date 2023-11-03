function solution(num_list) {
    var answer = [];
    let arr = num_list.sort(function (a, b) {
  return a - b;
});
    answer = arr.slice(0,5)
    return answer;
}