function solution(numbers) {
    var answer = 0;
    let numbers2 = numbers
numbers2.sort(function (a, b) {
  return b - a;
});
    answer= numbers2[0]*numbers2[1]
    return answer;
}