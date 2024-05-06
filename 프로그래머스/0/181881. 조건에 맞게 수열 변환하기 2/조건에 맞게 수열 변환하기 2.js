function solution(arr) {
    var answer = 0;
    let num = 0;
    while (num !== arr.length){
        for(let i=0; i<arr.length; i++){
            if (arr[i] >= 50 && arr[i]%2 ===0){
                arr[i] = (arr[i]/2)
            }
            else if (arr[i] < 50 && arr[i]%2===1){
                arr[i] =((arr[i]*2)+1)
            }
            else {num++}
        }
        if (num !== arr.length){
            num = 0;
        }
        answer++
    }
    answer -= 1
    return answer;
}