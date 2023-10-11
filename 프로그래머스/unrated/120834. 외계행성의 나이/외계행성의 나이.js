function solution(age) {
    var answer = '';
    let alp = 'abcdefghij'
    let str = String(age)
    for(let i=0; i<str.length; i++){
     for(let k=0; k<alp.length; k++){
        if(k===Number(str[i])){
                answer += alp[k]
        }
    }
    }
    return answer;
}