function solution(n) {
    var answer = 0;
    let a = 1
    let b = 2
    for (let i=2; i<n; i++){
        answer = ((a + b) > 1000000007 ? (a + b) % 1000000007 : (a + b))
        a = b
        b = answer
      
    }
   
    return answer;
}