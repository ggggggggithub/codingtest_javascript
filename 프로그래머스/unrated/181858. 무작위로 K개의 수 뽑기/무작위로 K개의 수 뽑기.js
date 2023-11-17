function solution(arr, k) {
    var answer = [];
    let newarr = arr.filter((val, idx) => arr.indexOf(val) === idx)
    answer = newarr.slice(0,k)
    if (answer.length < k){
        for(let i=answer.length; i<k; i++){
            answer.push(-1)
        }
    }
    return answer;
}