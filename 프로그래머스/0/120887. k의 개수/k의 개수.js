function solution(i, j, k) {
    var answer = 0;
    for(let l=i; l<=j; l++){
        let str = String(l)
        for(let t=0; t<str.length; t++){
            if (Number(str[t]) === k){
                answer++
            }
        }
    }
    return answer;
}