function solution(myString, pat) {
    var answer = 0;
    for(let i=0; i<myString.length; i++){
        let word = myString.slice(i, i+pat.length)
        if(word === pat){
            answer ++
        }
    }
    return answer;
}