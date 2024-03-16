function solution(myString) {
    var answer = '';
    let num = "l".charCodeAt(0)
    for(let i=0; i<myString.length; i++){
        let a = myString[i].charCodeAt(0)
        if (num > a){
            answer += 'l'
        }
        else {answer += myString[i]}
    }
    return answer;
}