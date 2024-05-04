function solution(my_str, n) {
    var answer = [];
    let str ='';
    for(let i=0; i<my_str.length; i++){
        str += my_str[i]
        if (i===my_str.length-1 || str.length === n){
            answer.push(str)
            str = '';
        }
    }
    return answer;
}