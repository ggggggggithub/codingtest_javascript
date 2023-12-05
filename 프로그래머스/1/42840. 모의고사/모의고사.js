function solution(answers) {
    var answer = [];
    let arr1 = [1,2,3,4,5]
    let arr2 = [2,1,2,3,2,4,2,5]
    let arr3 = [3,3,1,1,2,2,4,4,5,5]
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    for(let i=0; i<answers.length; i++){
        if(arr1[i%5] === answers[i]){
            num1 ++
        }
        if(arr2[i%8] === answers[i]){
            num2 ++
        }
        if(arr3[i%10] === answers[i]){
            num3 ++
        }
    }
    let maxnum = Math.max(num1,num2,num3)
    if (num1 === maxnum) {answer.push(1)};
    if (num2 === maxnum) {answer.push(2)};
    if (num3 === maxnum) {answer.push(3)};
    return answer;
}