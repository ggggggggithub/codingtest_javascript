function solution(emergency) {
    var answer = [];
    let arr = emergency.slice().sort((a,b)=>b-a)
    for(let i=0; i<emergency.length; i++){
        let num = arr.indexOf(emergency[i])+1
        answer.push(num)
    }
    return answer;
}