function solution(n, k) {
    var answer = 0;
    let word = n.toString(k);
    let prime = '';
    function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }  
    return true;
}
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "0") {
            prime += word[i];
        } else {
            if (prime !== "" && isPrime(Number(prime))) {
                answer++;
            }
            prime = '';
        }
    }
    if (prime !== "" && isPrime(Number(prime))) {
        answer++;
    }
    return answer;
}