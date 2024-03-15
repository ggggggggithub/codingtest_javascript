function solution(myString, pat) {
    var answer = 0;
    let str = ''
    for(let i=0; i<myString.length; i++){
        if (myString[i] === "A"){
            str += "B"
        }
        else {str += "A"}
    }
    if (str.includes(pat)){
        answer = 1
    }
    return answer;
}