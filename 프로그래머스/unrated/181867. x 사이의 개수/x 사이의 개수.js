function solution(myString) {
    var answer = [];
    let a = 0;
    for(let i=0; i<myString.length; i++){
        if( myString[i] !== "x"){
            a++
        }
        if (myString[i] === "x"){
            answer.push(a)
            a = 0
        }
        if (i+1 === myString.length)
        {answer.push(a)}
    }
    return answer;
}