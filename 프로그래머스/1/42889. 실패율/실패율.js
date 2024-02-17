function solution(N, stages) {
    var answer = [];
    stages.sort((a,b)=>(a-b))
    let arr = [];
    let arr2 = [];
    for (let i=1; i<=N; i++){
        const count = stages.filter(item => item === i).length; 
        const percent = count/(stages.length-stages.indexOf(i))
        arr2.push([i,percent])
    }
    arr2.sort((a,b)=>(b[1]-a[1]))
    for (let i=0; i<arr2.length; i++){
        answer.push(arr2[i][0])
    }
    return answer;
}