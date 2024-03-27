function solution(myString) {
    var answer = [];
    let str = '';
    for(let i=0; i<myString.length; i++){
        if (myString[i] !== "x"){
            str += myString[i]
        }
        else {if (str) {answer.push(str)
             str = '';}}
    }
    if (str) {answer.push(str)}
    answer.sort()
    return answer;
}