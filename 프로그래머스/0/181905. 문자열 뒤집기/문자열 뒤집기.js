function solution(my_string, s, e) {
    var answer = '';
    for(let i=0; i<s; i++){
        answer += my_string[i]
    }
        for (let j=e; j>=s; j--){
        answer += my_string[j]
    }
    for(let k=e+1; k<my_string.length; k++){
        answer += my_string[k]
    }

    return answer;
}