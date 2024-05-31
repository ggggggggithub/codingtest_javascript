function solution(arr, queries) {
    var answer = [];
    let arr2 = [];
    for(let i=0; i<queries.length; i++){
        let [a,b,c] = queries[i] 
        for(let j=a; j<=b; j++){
            if (arr[j] > c){
                arr2.push(arr[j])
            }
        }
        arr2.sort((a,b)=>(a-b))
        if (arr2.length){answer.push(arr2[0])}
        else {answer.push(-1)}
        arr2 = [];
    }
    return answer;
}