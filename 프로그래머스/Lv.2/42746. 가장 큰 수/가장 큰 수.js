function solution(numbers) {
    var answer = '';
    const sortarr = numbers.sort((a, b) => {
  const num1 = String(a);
  const num2 = String(b);
  return (num2 + num1) - (num1 + num2);
});
    answer = sortarr.join("").replace(/^(0+)/, '0')
    return answer
}