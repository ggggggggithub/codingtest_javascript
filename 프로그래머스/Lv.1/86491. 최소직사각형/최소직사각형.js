function solution(sizes) {
    var answer = 0;
    let arr = sizes.map(ele => ele.sort((a, b) => b - a)).sort((a,b)=>(b[0]-a[0]))
    let big = arr[0][0]
    let arr2 = arr.map(ele =>ele[1]).sort((a, b) => b - a)
    answer = big * arr2[0]
    return answer;
}