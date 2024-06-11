function solution(num, total) {
    var answer = [];
    for(let i=0; i<num; i++){
        answer.push(i)
    }
    let sum = answer.reduce((acc, cur) => acc + cur, 0)
    while (sum !== total){
        if (sum>total){
            sum = 0;
            for(let i=0; i<answer.length; i++){
                answer[i] = answer[i] + (-1)
            }
            sum = answer.reduce((acc, cur) => acc + cur, 0)}
        else if(sum<total){
            sum = 0;
            answer = answer.map(num => num + 1);
            sum = answer.reduce((acc, cur) => acc + cur, 0)}
    }
    return answer;
}