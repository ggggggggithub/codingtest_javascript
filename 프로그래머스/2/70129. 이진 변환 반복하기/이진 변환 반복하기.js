function solution(s) {
    var answer = [];
    let zero = 0;
    let num = 0;
    let turn = 0;
    while (s !== "1"){
        for (let i=0; i<s.length; i++){
            if (s[i] === "1"){
                num++
            }
            if (s[i] === "0"){
                zero ++
            }
        }
            s=(num).toString(2);
            num = 0;
           turn ++
    }
    answer.push(turn)
    answer.push(zero)
    return answer;
}