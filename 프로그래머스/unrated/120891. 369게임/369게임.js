function solution(order) {
    var answer = 0;
    let num = ["3","6","9"]
    let arr = String(order).split('')
    for(let i=0; i<arr.length; i++){
        for(let k=0; k<num.length; k++){
            if(arr[i] === num[k]){
                answer ++
            }
        }
    }

    return answer;
}