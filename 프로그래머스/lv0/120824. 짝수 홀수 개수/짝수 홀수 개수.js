function solution(num_list) {
    var answer = [];
    let num1 = [];
    let num2 = [];
    for (let i=0; i<num_list.length; i++){
        if (num_list[i] % 2 === 0){
            num1.push(num_list[i])
        }
        if (num_list[i] % 2 ===1){
            num2.push(num_list[i])
        }

    }
            answer.push(num1.length)
        answer.push(num2.length)
    return answer;
}