function solution(num_list) {
    var answer = 0;
    let num1 = '';
    let num2 = '';
    for(let i=0; i<num_list.length; i++){
        if (num_list[i] % 2 === 0){
            num1 += String(num_list[i])
        }
        else {num2 += String(num_list[i])}
    }
    answer = Number(num1) + Number(num2)
    return answer;
}