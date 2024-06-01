function solution(numlist, n) {
    var answer = [];
    answer = numlist.sort((a, b) => {
  const absA = Math.abs(n - a);
  const absB = Math.abs(n - b);
  if (absA === absB) {
    return b - a;
  }
  return absA - absB;
});
    return answer;
}