function solution(n) {
    var answer = 2;
    for(let i=0; i<n/2; i++){
        if(i*i===n){
            answer = 1
        }
       
    }
    return answer;
}