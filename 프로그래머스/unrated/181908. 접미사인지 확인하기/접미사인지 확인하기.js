function solution(my_string, is_suffix) {
    var answer = 0;
    let num=is_suffix.length;
    let newstr = my_string.slice(my_string.length-num,my_string.length)
    if (newstr === is_suffix){
        answer = 1
    }
    return answer;
}