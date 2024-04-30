function solution(order) {
    var answer = 0;
    let arr = ["icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot", "cafelatte"]
    for (let i=0; i<order.length; i++){
        if (arr.includes(order[i])){
            answer += 5000
        }
        else {answer += 4500}
    }
    return answer;
}