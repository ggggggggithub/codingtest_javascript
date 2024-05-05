function solution(arr) {
    var stk = [];
    let i =0;
    while(i<arr.length){
        let b = stk.length-1
        if (!stk.length){stk.push(arr[i]); i++}
        if (stk[b] < arr[i]){stk.push(arr[i]); i++}
        if (stk[b] >= arr[i]){stk.pop()}
    }
    return stk;
}