function solution(arr, queries) {
    var answer = [];
    for(let i=0; i<queries.length; i++){
        for(let j=queries[i][0]; j<=queries[i][1]; j++){
            
            arr[j] ++
        }
    }
    answer = arr
    return answer;
}