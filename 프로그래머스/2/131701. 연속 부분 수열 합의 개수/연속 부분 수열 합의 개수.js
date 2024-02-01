function solution(elements) {
    var answer = 0;
    let arr = [...elements, ...elements]
    let ans = [];
    for(let i=0; i<elements.length; i++){
        for(let j=i+1; j<i+elements.length+1; j++){
            let slicearr = arr.slice(i,j)
            let sum = slicearr.reduce((acc, cur) => acc + cur, 0);
            ans.push(sum)
        }
    }
    ans = [...new Set(ans)]
    answer = ans.length
    return answer;
}