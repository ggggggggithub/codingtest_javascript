function solution(arr) {
    var answer = [];
    let newarr = arr.slice().sort((a,b)=>(a-b))
    if (arr.length <= 1){
        return [-1]
    }
    let target = arr.indexOf(newarr[0])
    answer = arr.slice(0, target).concat(arr.slice(target + 1))
    return answer;
}