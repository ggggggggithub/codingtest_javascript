function solution(my_string) {
    var answer = '';
    let arr = [];
    for(let i=0; i<my_string.length; i++){
        if (!arr.includes(my_string[i])) {
            arr.push(my_string[i]);
        }
    }
    for(let k=0; k<arr.length; k++){
        answer += arr[k]
    }
    return answer;
}