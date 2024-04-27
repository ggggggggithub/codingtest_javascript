function solution(n, slicer, num_list) {
    var answer = [];
    let [a,b,c] = slicer
    if (n===1){answer = num_list.slice(0,b+1)}
    else if (n===2){answer = num_list.slice(a,num_list.length)}
    else if (n===3){answer = num_list.slice(a,b+1)}
    else if (n===4){
        let arr = num_list.slice(a,b+1)
        for(let i=0; i<arr.length; i++){
            if (i%c==0){answer.push(arr[i])}
        }}
    return answer;
}