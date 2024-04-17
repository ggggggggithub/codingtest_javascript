function solution(myStr) {
    var answer = [];
    let str = '';
    let arr = ["a","b","c"]
    for (let i=0; i<myStr.length; i++){
        if (!arr.includes(myStr[i])){
            str += myStr[i]
        }
        if (arr.includes(myStr[i]) && str.length){
            answer.push(str)
            str = ''
        }
    }
    if (str.length){answer.push(str)}
    if (!answer.length){
        answer.push("EMPTY")
    }
    return answer;
}