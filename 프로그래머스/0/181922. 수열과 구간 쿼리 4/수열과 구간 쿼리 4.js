function solution(arr, queries) {
    var answer = [];
    for(let i=0; i<queries.length; i++){
        let a = queries[i][0]
        let b = queries[i][1]
        let c = queries[i][2]
        for(let j=a; j<=b; j++){
            if (j%c===0){
                arr[j]++
            }
        }
    }
    answer = arr
    return answer;
}