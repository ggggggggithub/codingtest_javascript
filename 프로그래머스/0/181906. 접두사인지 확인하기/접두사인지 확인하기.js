function solution(my_string, is_prefix) {
    var answer = 0;
    let str = my_string.slice(0,is_prefix.length)
    if (str === is_prefix){
        answer = 1
    }
    return answer;
}