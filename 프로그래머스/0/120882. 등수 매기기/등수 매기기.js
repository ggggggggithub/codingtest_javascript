function solution(score) {
    var answer = [];
    let arr = [];
    score.forEach((ele)=>arr.push(ele[0]+ele[1]))
    let arr2 = arr.slice().sort((a,b)=>(b-a))
    arr.forEach((ele)=>answer.push(arr2.indexOf(ele)+1))
    return answer;
}