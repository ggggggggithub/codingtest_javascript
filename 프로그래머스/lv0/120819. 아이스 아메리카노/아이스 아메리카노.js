function solution(money) {
    var answer = [];
    let coffee = Math.floor(money/5500)
    let change = money-(5500*coffee)
    answer.push(coffee)
    answer.push(change)
    return answer;
}