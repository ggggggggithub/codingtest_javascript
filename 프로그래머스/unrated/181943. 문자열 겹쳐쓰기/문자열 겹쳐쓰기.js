function solution(my_string, overwrite_string, s) {
    var answer = '';
    for(let i=0; i<s; i++){
        answer += my_string[i]
    }
    for(let j=0; j<overwrite_string.length; j++){
        answer += overwrite_string[j]
    }
    if(answer.length < my_string.length){
        for(let k=answer.length; k<my_string.length; k++){
            answer += my_string[k]
        }
    }
    return answer;
}