function solution(my_string) {
    var answer = 0;
    let str = '';
    let num = [..."0123456789"]
    for(let i=0; i<my_string.length; i++){
        if (num.includes(my_string[i])){
            str += my_string[i]
        }
        else {answer += Number(str)
             str ='';}
    }
    if (str.length){answer += Number(str)}
    return answer;
}