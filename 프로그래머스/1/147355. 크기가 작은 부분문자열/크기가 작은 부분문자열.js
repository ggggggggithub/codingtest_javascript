function solution(t, p) {
    var answer = 0;
    let arr = [];
    let len = p.length;
    for (let i=0; i<t.length-len+1; i++){
        arr.push(t.slice(i,i+len))
    }
    for(let j=0; j<arr.length; j++){
        if (arr[j] <= p)
            answer ++
    }
    return answer;
}