function solution(n) {
    var answer = 0;
    let arr = [1,1,2]
    for(let i=3; i<n; i++){
        arr.push((arr[i-2] + arr[i-1])%1234567)
    }
    answer = arr[n-1]
    return answer;
}