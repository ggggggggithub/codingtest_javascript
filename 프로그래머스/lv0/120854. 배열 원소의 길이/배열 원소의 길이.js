function solution(strlist) {
    var answer = [];
    let number = 0
    for(let i=0; i<strlist.length; i++){
        for(let k=0; k<strlist[i].length; k++){
            number += 1
        }
        answer.push(number)
        number = 0
    }
    return answer;
}