function solution(arr) {
    var answer = [[]];
    answer = arr
    let num1 = arr.length
    let num2 = arr[0].length
    let zero = [];
    if (num1 > num2){
        for(let i=0; i<num1; i++){
            for(let j=answer[i].length; j<num1; j++){
                answer[i].push(0)
            }
        }
    }
    if (num1 < num2){
        for(let i=0; i<num2; i++){
            zero.push(0)
        }
        for(let j=num1; j<num2; j++){
            answer.push(zero)
        }
    }
    return answer;
}