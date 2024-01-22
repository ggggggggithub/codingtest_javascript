function solution(storey) {
    var answer = 0;
    let arr = [...String(storey)].map(Number).reverse()
    for(let i=0; i<arr.length-1; i++){
        let next = 10 - arr[i+1]
        if (10-arr[i] ===5){
            if (next<=5){
                arr[i+1] ++
            }
            answer += 10-arr[i]
        }
        if (10-arr[i] > 5){
            answer += arr[i]
        }
        if (10-arr[i] < 5){
            answer += 10-arr[i]
            arr[i+1] ++
        }
    }
    let a = arr[arr.length-1]
    if (a <= 5){
        answer += a
    }
    if (a===10){
        answer++
    }
    if (a > 5 && a<10){
        answer += 11-a
    }
    return answer;
}