function solution(n) {
    var answer = 0;
    let prime = Array(n+1).fill(true)
    prime[0] = false
    prime[1] = false
    for (let i=2; i<=Math.sqrt(n); i++){
        if (prime[i]){
            for(let j=i*i; j<=n; j+=i){
                prime[j] = false
            }
        }
    }
    for (let i = 2; i <= n; i++) {
    if (prime[i]) {
      answer++
    }
  }
    return answer;
}