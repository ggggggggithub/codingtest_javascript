function solution(array) {
    var answer = [];
    let big = 0
    let idx = 0
    for(let i=0; i<array.length; i++){
        if(array[i] > big){
            big = array[i]
            idx = i
        }
    }
    answer.push(big)
     answer.push(idx)

    return answer;
}