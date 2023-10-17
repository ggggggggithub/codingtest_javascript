function solution(n) {
    var answer = 0;
    let arr = [];
    for(let i=1; i<=n; i++){
        let num = 0;
        for(let k=0; k<=i; k++){
            if(i%k === 0){
                num++
            }
        }
        if (num >= 3){
            answer++
     
            }
    }
    return answer;
}