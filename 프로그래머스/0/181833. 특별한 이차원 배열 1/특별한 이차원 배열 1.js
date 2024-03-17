function solution(n) {
    var answer = [[]];
    let arr = [];
    for(let i=0; i<n; i++){
        let arr2 = [];
        for(let j=0; j<n; j++){
            if (i===j){
                arr2.push(1)
            }
            else {arr2.push(0)}
        }
        arr.push(arr2)
    }
    answer = arr
    return answer;
}